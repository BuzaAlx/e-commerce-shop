import React from "react";
import "./styles.scss";

const FormWrapper = ({ title, children }) => {
  return (
    <div className="formWrapper">
      <div className="wrap">
        {title && <h2>{title}</h2>}

        <div className="children">{children && children}</div>
      </div>
    </div>
  );
};

export default FormWrapper;
