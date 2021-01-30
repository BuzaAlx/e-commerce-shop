import React from "react";
// import "./styles.scss";
import FormButton from "../../forms/FormButton";

const Product = ({ productThumbnail, productName, productPrice }) => {
  if (
    !productThumbnail ||
    !productName ||
    typeof productPrice === "undefined"
  ) {
    return null;
  }
  const configAddToCardBtn = {
    type: "button",
  };

  return (
    <div className="list_product">
      <div className="thumb">
        <img src={productThumbnail} alt={productName} />
      </div>
      <div className="details">
        <ul>
          <li>
            <span className="headline">{productName}</span>
          </li>
          <li>
            <span className="price">${productPrice}</span>
          </li>
          <li>
            <div className="addToCard">
              <FormButton {...configAddToCardBtn}>add to card</FormButton>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
