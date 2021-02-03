import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCardItems,
  selectCardTotal,
} from "../../redux/Card/card.selectors";
import { createStructuredSelector } from "reselect";
import "./styles.scss";
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
    <div className="checkout" style={{ backgroundColor: "white" }}>
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
                      <th>quantity</th>
                      <th>price</th>
                      <th>remove</th>
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
                      <h3>Total:{cardItemsTotal}</h3>
                    </td>
                  </tr>
                  <tr>
                    <table border="0" cellPadding="10" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td>
                            <FormButton onClick={() => history.goBack()}>
                              Continue Shopping
                            </FormButton>
                          </td>
                          <td>
                            <FormButton>checkout</FormButton>
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
