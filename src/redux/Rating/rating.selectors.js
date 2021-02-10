import { createSelector } from "reselect";

export const selectRatingData = (state) => state.ratingData;

export const selectPostRating = createSelector(
  [selectRatingData],
  (ratingData) => ratingData.postRating
);

export const selectReviewsCount = createSelector(
  [selectPostRating],
  (postRating) => postRating?.length
);

export const selectAverageCount = createSelector(
  [selectPostRating],
  (postRating) => {
    let sum = postRating?.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.rating,
      0
    );
    return (sum / postRating?.length).toFixed(1);
  }
);
