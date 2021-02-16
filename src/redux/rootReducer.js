import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productsReducer from "./Products/products.reducer";
import cardReducer from "./Card/card.reducer";
import ratingReducer from "./Rating/rating.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cardData: cardReducer,
  ratingData: ratingReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["cardData"],
};

export default persistReducer(configStorage, rootReducer);
