import React from "react";
import "./styles.scss";
import FormButton from "../forms/FormButton";

function LoadMore({ onLoadMoreEvt = () => {} }) {
  return (
    <FormButton className="load-more-btn" onClick={() => onLoadMoreEvt()}>
      Load More
    </FormButton>
  );
}

export default LoadMore;
