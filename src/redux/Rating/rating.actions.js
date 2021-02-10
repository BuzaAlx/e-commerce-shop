import ratingTypes from "./rating.types";

export const getPostRatingStart = (documentID) => ({
  type: ratingTypes.GET_POST_RATING_START,
  payload: documentID,
});

export const setPostRating = (postRating) => ({
  type: ratingTypes.SET_RATING,
  payload: postRating,
});

export const resetRatingState = () => ({
  type: ratingTypes.RESET_RATING_STATE,
});

export const handleStarStart = (payload) => ({
  type: ratingTypes.HANDLE_STAR_START,
  payload: payload,
});
