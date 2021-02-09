import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  setProduct,
} from "./../../redux/Products/products.actions";
import { addProduct } from "../../redux/Card/card.actions";
import ProductMark from "../ProductMark";
import StarRating from "../StarRating";
import SizePanel from "../SizePanel";
import classNames from "classnames";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";

const mapState = ({ productsData }) => ({
  product: productsData.product,
});

function ProductCard() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedSlide, setSelectedSlide] = useState(null);
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
    additionalPhotos,
    productMark,
    availableSizes,
  } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  const configProductMark = {
    type: "ends",
  };

  const configStarRating = {
    title_visibility: "blah blah",
    documentID,
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
          <img
            src={
              selectedSlide !== null
                ? additionalPhotos[selectedSlide]
                : productThumbnail
            }
            alt={productName}
          />
          <div className="hero__aditional-photos-container">
            {additionalPhotos?.map((p, i) => {
              let classes = classNames({
                "hero__photo-wrapper": true,
                active: i === selectedSlide,
              });
              return (
                <div className={classes} onClick={() => setSelectedSlide(i)}>
                  <img src={p} alt="photo" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="productDetails">
          <ul>
            <li>
              <h1>{productName}</h1>
            </li>
            <li className="productDetails__product-mark">
              <ProductMark type={productMark} />
            </li>
            <li className="productDetails__starRating">
              <StarRating {...configStarRating} />
            </li>
            <li className="productDetails__price price">
              <span className="price__currency-code">$</span>{" "}
              <span className="price__num">{productPrice}</span>
            </li>

            <li className="productCard__description">
              <span dangerouslySetInnerHTML={{ __html: productDesc }} />
            </li>

            <li className="productCard__row">
              <span className="productCard__row-text">Sizes :</span>
              <SizePanel
                sizes={availableSizes}
                setSelectedSize={setSelectedSize}
                selectedSize={selectedSize}
              />
            </li>
            <li className="productCard__row">
              <div
                className="add-to-card btn"
                onClick={() =>
                  handleAddToCard({ ...product, size: selectedSize })
                }
              >
                <AiOutlineShoppingCart size="20" />
                <span>Add to card</span>
              </div>
              <div className="back-to-list btn">
                <Link to="/search">
                  <BsCardChecklist size="20" /> back to product list
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
