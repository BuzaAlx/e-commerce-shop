import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Basket from "../../components/Basket";
import ScrollToTop from "../../components/ScrollToTop";

function Card() {
  return (
    <div>
      <ScrollToTop>
        <Basket />
      </ScrollToTop>
    </div>
  );
}

export default Card;
