import React, { useState } from "react";
import "../styles.scss";
import { useDispatch } from "react-redux";
import CKEditor from "ckeditor4-react";

import Modal from "../../../components/Modal";
import FormInput from "../../../components/forms/FormInput";
import FormSelect from "../../../components/forms/FormSelect";
import FormButton from "../../../components/forms/FormButton";
import FormCheckbox from "../../../components/forms/FormCheckbox";
import { addProductStart } from "../../../redux/Products/products.actions";

function AddProductBtn() {
  const [availableSizes, setAvailableSizes] = useState([]);
  const [productCategory, setProductCategory] = useState("mens");
  const [productMark, setProductMark] = useState("new");
  const [productName, setProductName] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [additionalPhotos, setadditionalPhotos] = useState(["", "", ""]);
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState("");

  const [hideModal, setHideModal] = useState(true);
  const dispatch = useDispatch();

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal,
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory("mens");
    setProductMark("new");
    setProductName("");
    setProductThumbnail("");
    setProductPrice(0);
    setProductDesc("");
    setadditionalPhotos(["", "", ""]);
    setAvailableSizes([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productMark,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
        additionalPhotos,
        availableSizes,
      })
    );
    resetForm();
  };

  const configCheckbox = {
    label: "Select available sizes",
    options: ["XS", "S", "M", "L", "XL", "XXL"],
    handleChange: setAvailableSizes,
    sizes: availableSizes,
  };

  return (
    <>
      <div className="callToActions">
        <ul>
          <li>
            <FormButton onClick={() => toggleModal()}>
              Add new product
            </FormButton>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>
            <h2>Add new product</h2>

            <div className="formGroup">
              <FormSelect
                label="Category"
                options={[
                  {
                    value: "mens",
                    name: "Mens",
                  },
                  {
                    value: "womens",
                    name: "Womens",
                  },
                  {
                    value: "children",
                    name: "Children",
                  },
                ]}
                handleChange={(e) => setProductCategory(e.target.value)}
              />
              <FormSelect
                label="Product Mark"
                options={[
                  {
                    value: "new",
                    name: "New Product",
                  },
                  {
                    value: "top-sales",
                    name: "Top Sales",
                  },
                  {
                    value: "ends",
                    name: "Ends",
                  },
                ]}
                handleChange={(e) => setProductMark(e.target.value)}
              />

              <FormCheckbox {...configCheckbox} />
            </div>

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={(e) => setProductName(e.target.value)}
            />

            <div className="formGroup">
              {Array(3)
                .fill("")
                .map((_, i) => {
                  return (
                    <FormInput
                      required
                      label={`Additional image URL `}
                      type="url"
                      value={additionalPhotos[i]}
                      handleChange={(e) => {
                        let stateCopy = [...additionalPhotos];
                        stateCopy[i] = e.target.value;
                        setadditionalPhotos(stateCopy);
                      }}
                    />
                  );
                })}
            </div>

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={(e) => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={(e) => setProductPrice(e.target.value)}
            />

            <CKEditor
              onChange={(evt) => setProductDesc(evt.editor.getData())}
            />

            <br />

            <FormButton type="submit">Add product</FormButton>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default AddProductBtn;
