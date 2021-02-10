import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

import { addProduct } from "../../../redux/Card/card.actions";
import StarRating from "../../StarRating";
import SizePanel from "../../SizePanel";
import ProductMark from "../../ProductMark";

const Product = (product) => {
  const [selectedSize, setSelectedSize] = useState("M");

  const dispatch = useDispatch();
  const history = useHistory();
  const {
    documentID,
    productThumbnail,
    productName,
    productPrice,
    productMark,
    availableSizes,
  } = product;

  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === "undefined"
  ) {
    return null;
  }

  const handleAddToCard = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    history.push("/card");
  };

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]; //TODO store it in db product , if abailavle return size is NON return "line-through"

  return (
    <div className="list_product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>
      <div className="details">
        {/* ///////////////// */}
        <div className="list-product__wrapper">
          <div className="list_product__title">
            <span className="name">
              <Link to={`/product/${documentID}`}>
                Спортивный костюм Adidas W 3S Tr Ts GM5581 L Crered/Hazros
                (4064045349476)
              </Link>
            </span>
          </div>
        </div>
        {/* //////////////////// */}
        <div className="list-product__wrapper list-product__wrapper--bottom">
          <div>
            <span className="previousPrice text-secondary ">2000 $</span>
          </div>
          <div>
            <span className="price text-alarm">{productPrice}$</span>
          </div>
          <div className="list-product__row">
            <span className="available">Is available</span>
            <SizePanel
              sizes={availableSizes}
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
            />
          </div>
        </div>
      </div>

      <div className="add-to-card">
        <div
          className="add-to-card__link"
          onClick={() => handleAddToCard({ ...product, size: selectedSize })}
        >
          <AiOutlineShoppingCart size="30" />
        </div>
      </div>
      <div>
        <span className="add-to-favorites">
          <MdFavoriteBorder size="30" />
        </span>
      </div>
      <div>
        <span className="top-sales-mark">
          <ProductMark type={productMark} />
        </span>
      </div>
    </div>
  );
};

export default Product;

// const markup = {
//   promo_label: "TOP SALES" || "STOCK" || null,
//   isDiscounded: false || { oldPrice, newPrice },
//   isAvailable: "available" || "ends",
// };
