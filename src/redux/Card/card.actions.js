import cardTypes from "./card.types";

export const addProduct = (nextCardItem) => ({
  type: cardTypes.ADD_TO_CARD,
  payload: nextCardItem,
});

export const removeCardItem = (cardItem) => ({
  type: cardTypes.REMOVE_CARD_ITEM,
  payload: cardItem,
});

export const reduceCardItem = (cardItem) => ({
  type: cardTypes.REDUCE_CARD_ITEM,
  payload: cardItem,
});
