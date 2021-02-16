import { createSelector } from "reselect";

/////////////////////////////
///SELECTED PRODUCT

export const selectSelectedProduct = (state) => state.productsData.product;

export const selectSelectedProductRating = createSelector(
  [selectSelectedProduct],
  (product) => product?.rating
);

export const selectSelectedProductReviewsCount = createSelector(
  [selectSelectedProduct],
  (product) => product?.rating?.length
);

export const selectSelectedProductAverageCount = createSelector(
  [selectSelectedProduct],
  (product) => {
    let sum = product?.rating?.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.rating,
      0
    );
    return (sum / product?.rating?.length).toFixed(1);
  }
);

////////////////////////////

export const selectProduct = (state, documentID) =>
  state.productsData.products?.data?.find((p) => p.documentID === documentID);

export const selectProductRating = createSelector(
  [selectProduct],
  (product) => product?.rating
);

export const selectReviewsCount = createSelector(
  [selectProduct],
  (product) => product?.rating.length
);

export const selectAverageCount = createSelector([selectProduct], (product) => {
  let sum = product?.rating?.reduce(
    (accumulator, currentValue) => accumulator + +currentValue.rating,
    0
  );
  return (sum / product?.rating.length).toFixed(1);
});
