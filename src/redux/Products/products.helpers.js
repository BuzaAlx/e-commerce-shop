import { firestore } from "../../firebase/utils";

export const handleAddProduct = (product) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("products")
      .doc()
      .set(product)
      .then(() => {
        resolve();
      })
      .catch((err) => reject(err));
  });
};

export const handleFetchProducts = ({
  filterType,
  startAfterDoc,
  persistProducts = [],
}) => {
  return new Promise((resolve, reject) => {
    const pageSize = 6;

    let ref = firestore
      .collection("products")
      .orderBy("createdDate")
      .limit(pageSize);

    if (filterType) {
      ref = ref.where("productCategory", "==", filterType);
    }
    if (startAfterDoc) {
      ref = ref.startAfter(startAfterDoc);
    }

    ref
      .get()
      .then((snapshot) => {
        const totalCount = snapshot.size;

        const data = [
          ...persistProducts,
          ...snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];

        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
          isLastPage: totalCount < 1,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleDeleteProduct = (documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("products")
      .doc(documentID)
      .delete()
      .then(() => resolve())
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchProduct = (productID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("products")
      .doc(productID)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          resolve({
            ...snapshot.data(),
            documentID: snapshot.id,
          });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const handleFetchProductRating = (documentID) => {
  return new Promise((resolve, reject) => {
    try {
      firestore
        .collection("products")
        .doc(documentID)
        .collection("rating")
        .onSnapshot((snapshot) => {
          resolve(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const addRating = (products) => {
  let productsCopy = { ...products };

  let newProductData = products.data.map(async (element) => {
    const result = await handleFetchProductRating(element.documentID);
    return {
      ...element,
      rating: result,
    };
  });

  let productsWithRating = Promise.all(newProductData).then((data) => {
    return {
      ...productsCopy,
      data,
    };
  });
  return productsWithRating;
};

export const handleStarClick = ({
  productRating,
  displayName,
  index,
  documentID,
}) => {
  return new Promise((resolve, reject) => {
    const found = productRating.find((el) => el.username === displayName);
    console.log({ productRating, displayName, index, documentID });
    console.log(found);

    if (found) {
      firestore
        .collection("products")
        .doc(documentID)
        .collection("rating")
        .doc(found.id)
        .set({
          username: displayName,
          rating: index + 1,
        });
      resolve(documentID);
    }

    if (!found) {
      firestore
        .collection("products")
        .doc(documentID)
        .collection("rating")
        .doc()
        .set({
          username: displayName,
          rating: index + 1,
        });
      resolve(documentID);
    }
  });
};
