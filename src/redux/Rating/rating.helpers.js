import { firestore } from "../../firebase/utils";

export const handleFetchRating = (documentID) => {
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
