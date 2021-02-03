import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";

import { addProduct } from "../../../redux/Card/card.actions";
import StarRating from "../../StarRating";

const Product = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { documentID, productThumbnail, productName, productPrice } = product;

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

  return (
    <div className="list_product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>
      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/product/${documentID}`}>
                Спортивный костюм Adidas W 3S Tr Ts GM5581 L Crered/Hazros
                (4064045349476)
              </Link>
            </span>
          </li>
          <li>
            <div className="stars-rating">
              <StarRating />
            </div>
          </li>
          <li>
            <span className="previousPrice text-secondary ">2000 $</span>
          </li>
          <li>
            <span className="price text-alarm">{productPrice}$</span>
          </li>
          <li>
            <span className="available">Is available</span>
          </li>
          <li>
            <div className="add-to-card">
              <div
                className="add-to-card__link"
                onClick={() => handleAddToCard(product)}
              >
                <AiOutlineShoppingCart size="30" />
              </div>
            </div>
          </li>
          <li>
            <span className="add-to-favorites">
              <MdFavoriteBorder size="30" />
            </span>
          </li>
          <li>
            <span className="top-sales-mark">top sales</span>
          </li>
        </ul>
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
