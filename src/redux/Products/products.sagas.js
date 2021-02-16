import { takeLatest, put, all, call } from "redux-saga/effects";
import productsTypes from "./products.types";
import {
  handleAddProduct,
  handleFetchProducts,
  addRating,
  handleDeleteProduct,
  handleFetchProduct,
  handleFetchProductRating,
  handleStarClick,
} from "./products.helpers";
import {
  setProducts,
  fetchProductsStart,
  setProduct,
  setIsLoading,
  setProductRating,
  setSelectedProductRating,
  getProductRatingStart,
} from "./products.actions";
import { auth } from "../../firebase/utils";

///

export function* addProduct({ payload }) {
  try {
    const timestamp = new Date();
    handleAddProduct({
      ...payload,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchProductsStart());
  } catch (error) {
    console.log(error);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

////

export function* fetchProducts({ payload }) {
  try {
    const products = yield handleFetchProducts(payload);
    const productsWithRating = yield addRating(products);
    yield put(setProducts(productsWithRating));
  } catch (error) {
    console.log(error);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

///
export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put(fetchProductsStart());
  } catch (error) {
    console.log(error);
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
  try {
    yield put(setIsLoading(true));
    const product = yield handleFetchProduct(payload);
    const rating = yield call(handleFetchProductRating, payload);
    yield put(setProduct({ ...product, rating }));
    yield put(setIsLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}

export function* getRatingProduct({ payload }) {
  try {
    const rating = yield handleFetchProductRating(payload);
    // console.log({ rating, payload });
    yield put(setProductRating({ rating, documentID: payload }));
  } catch (error) {
    console.log(error);
  }
}

export function* onGetRatingProductStart() {
  yield takeLatest(productsTypes.GET_PRODUCT_RATING_START, getRatingProduct);
}

export function* handleRate({ payload }) {
  try {
    const documentID = yield handleStarClick(payload);
    yield put(getProductRatingStart(documentID));
  } catch (error) {
    console.log(error);
  }
}

export function* onHandleRateStart() {
  yield takeLatest(productsTypes.HANDLE_RATE_START, handleRate);
}

//////////////////////////////

export function* handleSelectedProductRate({ payload }) {
  try {
    const documentID = yield handleStarClick(payload);
    const rating = yield handleFetchProductRating(documentID);
    yield put(setSelectedProductRating({ rating, documentID }));
  } catch (error) {
    console.log(error);
  }
}

export function* onHandleSelectedProductRateStart() {
  yield takeLatest(
    productsTypes.HANDLE_SELECTED_PRODUCT_RATE_START,
    handleSelectedProductRate
  );
}

export default function* productsSagas() {
  yield all([
    call(onHandleSelectedProductRateStart),
    call(onHandleRateStart),
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
    call(onGetRatingProductStart),
  ]);
}
