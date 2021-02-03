import { createSelector } from "reselect";

export const selectCardData = (state) => state.cardData;

export const selectCardItems = createSelector(
  [selectCardData],
  (cardData) => cardData.cardItems
);

export const selectCardItemsCount = createSelector(
  [selectCardItems],
  (cardItems) =>
    cardItems.reduce((quantity, cardItem) => quantity + cardItem.quantity, 0)
);

export const selectCardTotal = createSelector([selectCardItems], (cardItems) =>
  cardItems.reduce(
    (quantity, cardItem) =>
      quantity + cardItem.quantity * cardItem.productPrice,
    0
  )
);
