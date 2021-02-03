import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCardItem,
  addProduct,
  reduceCardItem,
} from "../../../redux/Card/card.actions";

const Item = (product) => {
  const dispatch = useDispatch();

  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID,
  } = product;

  const handleRemoveCardItem = (documentID) => {
    dispatch(removeCardItem({ documentID }));
  };

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleReduceItem = (product) => {
    dispatch(reduceCardItem(product));
  };

  return (
    <table className="cardItem" border="0" cellSpacing="0" cellPadding="0">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>{productName}</td>
          <td>
            <span
              className="cardBtn"
              onClick={() => handleReduceItem(product)}
            >{`< `}</span>
            <span>{quantity}</span>
            <span
              className="cardBtn"
              onClick={() => handleAddProduct(product)}
            >{` >`}</span>
          </td>
          <td>${productPrice}</td>
          <td align="center">
            <span
              className="cardBtn"
              onClick={() => handleRemoveCardItem(documentID)}
            >
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;
