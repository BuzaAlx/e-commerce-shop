import React from "react";
import "./styles.scss";
import FormButton from "../forms/FormButton";

function LoadMore({ onLoadMoreEvt = () => {} }) {
  return <FormButton onClick={() => onLoadMoreEvt()}>Load More</FormButton>;
}

export default LoadMore;
