import userTypes from "./rating.types";

const INITIAL_STATE = {
  postRating: null,
};

const ratingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_RATING:
      return {
        ...state,
        postRating: action.payload,
      };
    case userTypes.RESET_RATING_STATE:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default ratingReducer;
