import { createSelector } from "reselect";

////helpers
const getRating = (product) => product?.rating;

const getLength = (product) => product?.rating?.length;

const getSum = (product) => {
  let sum = product?.rating?.reduce(
    (accumulator, currentValue) => accumulator + +currentValue.rating,
    0
  );
  return (sum / product?.rating?.length).toFixed(1);
};

///SELECTED PRODUCT

export const selectSelectedProduct = (state) => state.productsData.product;

export const selectSelectedProductRating = createSelector(
  [selectSelectedProduct],
  getRating
);

export const selectSelectedProductReviewsCount = createSelector(
  [selectSelectedProduct],
  getLength
);

export const selectSelectedProductAverageCount = createSelector(
  [selectSelectedProduct],
  getSum
);

///PRODUCT OF RESULTS LIST

export const selectProduct = (state, documentID) =>
  state.productsData.products?.data?.find((p) => p.documentID === documentID);

export const selectProductRating = createSelector([selectProduct], getRating);

export const selectReviewsCount = createSelector([selectProduct], getLength);

export const selectAverageCount = createSelector([selectProduct], getSum);
