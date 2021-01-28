import React from "react";
import "./styles.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="FormBtn" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
