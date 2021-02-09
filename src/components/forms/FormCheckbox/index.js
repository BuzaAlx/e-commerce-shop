import React from "react";
import "./styles.scss";

const FormCheckbox = ({
  options,
  handleChange,
  label,
  sizes,
  ...otherProps
}) => {
  const handleCheckBox = (e) => {
    console.log({ [e.target.name]: e.target.checked });
    let newList;
    if (e.target.checked) {
      newList = [...sizes, e.target.name];
    } else if (!e.target.checked) {
      let copyList = [...sizes];
      newList = copyList.filter((item) => item !== e.target.name);
    }

    handleChange(newList);
  };

  return (
    <div className="checkbox formRow">
      {label && <label>{label}</label>}
      <div className="checkbox__inner">
        {options.map((o) => {
          return (
            <>
              <label name="asd" className="checkbox__label">
                {o}
                <input name={o} type="checkbox" onChange={handleCheckBox} />
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FormCheckbox;
