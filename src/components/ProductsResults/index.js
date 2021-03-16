import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchProductsStart } from "../../redux/Products/products.actions";
import "./styles.scss";
import Product from "./Product";
import FormSelect from "../forms/FormSelect";
import LoadMore from "../LoadMore";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

function ProductsResults({}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        persistProducts: data,
        startAfterDoc: queryDoc,
      })
    );
  };

  if (!Array.isArray(data)) return null;

  const validateData = ({ productThumbnail, productName, productPrice }) => {
    if (
      !productThumbnail ||
      !productName ||
      typeof productPrice === "undefined"
    ) {
      return false;
    }
  };

  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: "Show all",
        value: "",
      },
      {
        name: "mens",
        value: "mens",
      },
      {
        name: "womens",
        value: "womens",
      },
    ],
    handleChange: handleFilter,
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    );
  }

  return (
    <div className="products">
      <h1 className="transition-left-anim">
        {filterType ? `${filterType} Products` : "All Products"}
      </h1>
      <FormSelect {...configFilters} className="secondary fade-anim" />
      <div className="productsResults fade-anim">
        {data.map((product) => {
          if (validateData(product)) {
            return null;
          }
          return <Product key={product.documentID} {...product} />;
        })}
      </div>
      {!isLastPage && <LoadMore {...configLoadMore} />}
    </div>
  );
}

export default ProductsResults;
