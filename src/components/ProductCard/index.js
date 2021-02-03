import React, { useEffect } from "react";
import "./styles.scss";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "./../../redux/Products/products.actions";
import { addProduct } from "../../redux/Card/card.actions";
import FormButton from "../forms/FormButton";

const mapState = ({ productsData }) => ({
  product: productsData.product,
});

function ProductCard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productName,
    productThumbnail,
    productPrice,
    productDesc,
    documentID,
  } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const configAddToCardBtn = {
    type: "button",
  };

  const handleAddToCard = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    history.push("/card");
  };

  return (
    <div className="productCard fade-anim">
      <div className="wrapper">
        <div className="hero">
          <img src={productThumbnail} alt={productName} />
        </div>
        <div className="productDetails">
          <ul>
            <li>
              <h1>{productName}</h1>
            </li>
            <li>
              <span>${productPrice}</span>
            </li>
            <li>
              <div className="addToCard">
                <FormButton
                  {...configAddToCardBtn}
                  onClick={() => handleAddToCard(product)}
                >
                  add to card
                </FormButton>
              </div>
            </li>
            <li>
              <span dangerouslySetInnerHTML={{ __html: productDesc }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
