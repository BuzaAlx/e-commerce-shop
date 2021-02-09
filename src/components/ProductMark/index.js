import React from "react";
import "./styles.scss";

function ProductMark({ type = "new" }) {
  if (type === "new") {
    return (
      <div className="product-mark">
        <span className="product-mark__text">New</span>
      </div>
    );
  } else if (type === "top-sales") {
    return (
      <div className="product-mark top-sales">
        <span className="product-mark__text">Top Sales</span>
      </div>
    );
  } else if (type === "ends") {
    return (
      <div className="product-mark ends">
        <span className="product-mark__text">Ends</span>
      </div>
    );
  }
}

export default ProductMark;

// config: { type = "NEW" }
