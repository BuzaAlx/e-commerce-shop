export const existingCardItem = ({ prevCardItems, nextCardItem }) => {
  return prevCardItems.find(
    (cardItem) => cardItem.documentID === nextCardItem.documentID
  );
};

export const handleAddToCard = ({ prevCardItems, nextCardItem }) => {
  const quantityIncrement = 1;
  const cardItemExists = existingCardItem({ prevCardItems, nextCardItem });

  if (cardItemExists) {
    return prevCardItems.map((cardItem) => {
      return cardItem.documentID === nextCardItem.documentID
        ? {
            ...cardItem,
            quantity: cardItem.quantity + quantityIncrement,
          }
        : cardItem;
    });
  }

  return [
    ...prevCardItems,
    {
      ...nextCardItem,
      quantity: quantityIncrement,
    },
  ];
};

export const handleRemoveCardItem = ({ prevCardItems, cardItemToRemove }) => {
  return [
    ...prevCardItems.filter(
      (el) => el.documentID !== cardItemToRemove.documentID
    ),
  ];
};

export const handleReduceItem = ({ prevCardItems, cardItemToReduce }) => {
  const existingCardItem = prevCardItems.find((cardItem) => {
    return cardItem.documentID === cardItemToReduce.documentID;
  });

  if (existingCardItem.quantity === 1) {
    return prevCardItems.filter(
      (el) => el.documentID !== cardItemToReduce.documentID
    );
  }

  return prevCardItems.map((el) => {
    return el.documentID === existingCardItem.documentID
      ? {
          ...el,
          quantity: el.quantity - 1,
        }
      : el;
  });
};
