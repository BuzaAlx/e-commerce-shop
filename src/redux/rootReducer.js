import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productsReducer from "./Products/products.reducer";
import cardReducer from "./Card/card.reducer";
import ratingReducer from "./Rating/rating.reducer";

export default combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cardData: cardReducer,
  ratingData: ratingReducer,
});
