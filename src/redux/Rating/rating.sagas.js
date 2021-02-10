import { takeLatest, call, all, put } from "redux-saga/effects";
import { getCurrentUser } from "./../../firebase/utils";
import { handleFetchRating, handleStarClick } from "./rating.helpers";
import { getPostRatingStart } from "./rating.actions";

import ratingTypes from "./rating.types";

import { setPostRating } from "./rating.actions";

export function* getPostRating({ payload }) {
  try {
    const rating = yield handleFetchRating(payload);
    yield put(setPostRating(rating));
  } catch (error) {
    console.log(error);
  }
}

export function* onGetPostRatingStart() {
  yield takeLatest(ratingTypes.GET_POST_RATING_START, getPostRating);
}

export function* handleStar({ payload }) {
  try {
    const documentID = yield handleStarClick(payload);
    yield put(getPostRatingStart(documentID));
  } catch (error) {
    console.log(error);
  }
}

export function* onHandleStarStart() {
  yield takeLatest(ratingTypes.HANDLE_STAR_START, handleStar);
}

export default function* ratingSagas() {
  yield all([call(onGetPostRatingStart), call(onHandleStarStart)]);
}
