import React, { useState } from "react";
import "../styles.scss";
import { useDispatch } from "react-redux";
import CKEditor from "ckeditor4-react";

import Modal from "../../../components/Modal";
import FormInput from "../../../components/forms/FormInput";
import FormSelect from "../../../components/forms/FormSelect";
import FormButton from "../../../components/forms/FormButton";
import { addProductStart } from "../../../redux/Products/products.actions";

function AddProductBtn() {
  const [productCategory, setProductCategory] = useState("mens");
  const [productName, setProductName] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
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
    setProductName("");
    setProductThumbnail("");
    setProductPrice(0);
    setProductDesc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );
    resetForm();
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
              ]}
              handleChange={(e) => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={(e) => setProductName(e.target.value)}
            />

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
