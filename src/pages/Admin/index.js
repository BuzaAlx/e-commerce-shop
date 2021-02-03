import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";

import LoadMore from "../../components/LoadMore";
import FormButton from "../../components/forms/FormButton";
import {
  fetchProductsStart,
  deleteProductStart,
} from "../../redux/Products/products.actions";
import AddProductBtn from "./AddProductBtn";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Admin = (props) => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="admin">
      <AddProductBtn />
      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>Manage Products</h1>
              </th>
            </tr>
            <tr>
              <td>
                <table
                  className="results"
                  border="0"
                  cellPadding="10"
                  cellSpacing="0"
                >
                  <tbody>
                    {Array.isArray(data) &&
                      data.length > 0 &&
                      data.map((product, index) => {
                        const {
                          productName,
                          productThumbnail,
                          productPrice,
                          documentID,
                        } = product;

                        return (
                          <tr key={index}>
                            <td>
                              <img className="thumb" src={productThumbnail} />
                            </td>
                            <td>{productName}</td>
                            <td>£{productPrice}</td>
                            <td>
                              <FormButton
                                onClick={() =>
                                  dispatch(deleteProductStart(documentID))
                                }
                              >
                                Delete
                              </FormButton>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>{!isLastPage && <LoadMore {...configLoadMore} />}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
