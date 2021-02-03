import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productsReducer from "./Products/products.reducer";
import cardReducer from "./Card/card.reducer";

export default combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cardData: cardReducer,
});
