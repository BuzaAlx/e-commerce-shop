import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCardItems,
  selectCardTotal,
} from "../../redux/Card/card.selectors";
import { createStructuredSelector } from "reselect";
import "./styles.scss";
import { Link } from "react-router-dom";
import FormButton from "../forms/FormButton";
import Item from "./Item";
import { fetchProductsStart } from "../../redux/Products/products.actions";

const mapState = createStructuredSelector({
  cardItems: selectCardItems,
  cardItemsTotal: selectCardTotal,
});

function Basket() {
  const { cardItems, cardItemsTotal } = useSelector(mapState);
  const history = useHistory();
  const NoItemsMarkUp = () => <p>You have no items in your card</p>;

  return (
    <div className="checkout">
      <h1>Basket</h1>

      <div className="card">
        {cardItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <table
                  className="checkoutHeader"
                  border="0"
                  cellPadding="10"
                  cellSpacing="0"
                >
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Size</th>
                      <th>Price</th>
                      <th>Delete</th>
                    </tr>
                  </tbody>
                </table>
              </tr>
              <tr>
                <table border="0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    {cardItems.map((item, pos) => {
                      return (
                        <tr key={pos}>
                          <Item {...item} />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </tr>

              <tr>
                <table
                  align="right"
                  border="0"
                  cellSpacing="0"
                  cellPadding="10"
                >
                  <tr align="right">
                    <td>
                      <h3>Total:{cardItemsTotal}$</h3>
                    </td>
                  </tr>
                  <tr>
                    <table border="0" cellPadding="10" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td>
                            <Link
                              className="table-button btn"
                              onClick={() => history.push("/search")}
                            >
                              Continue Shopping
                            </Link>
                          </td>
                          <td>
                            <Link className="table-button btn table-button--checkout">
                              checkout
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </tr>
                </table>
              </tr>
            </tbody>
          </table>
        ) : (
          <NoItemsMarkUp />
        )}
      </div>
    </div>
  );
}

export default Basket;
