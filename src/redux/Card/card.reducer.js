import cardTypes from "./card.types";
import {
  handleAddToCard,
  handleRemoveCardItem,
  handleReduceItem,
} from "./card.utils";

const INITIAL_STATE = {
  cardItems: [],
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cardTypes.ADD_TO_CARD:
      return {
        ...state,
        cardItems: handleAddToCard({
          prevCardItems: state.cardItems,
          nextCardItem: action.payload,
        }),
      };
    case cardTypes.REDUCE_CARD_ITEM:
      return {
        ...state,
        cardItems: handleReduceItem({
          prevCardItems: state.cardItems,
          cardItemToReduce: action.payload,
        }),
      };
    case cardTypes.REMOVE_CARD_ITEM:
      return {
        ...state,
        cardItems: handleRemoveCardItem({
          prevCardItems: state.cardItems,
          cardItemToRemove: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default cardReducer;
