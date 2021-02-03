import React from "react";
import "./styles.scss";
import ProductsResults from "../../components/ProductsResults";

function Search() {
  return (
    <div className="searchPage container">
      <ProductsResults />
    </div>
  );
}

export default Search;
