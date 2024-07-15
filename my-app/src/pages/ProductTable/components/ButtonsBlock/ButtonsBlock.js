import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableButton from "../../../../components/TableButton/TableButton";
import AddButtonModal from "./AddButtonModal/AddButtonModal";
import ProductForm from "./AddButtonModal/ProductForm";
import "./ButtonsBlock.css";
import UserIcon from "../../../../assets/svg/UserIcon";
import PlusSign from "../../../../assets/svg/PlusSign";

const ButtonsBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState(null);

  const openAddProductModal = () => {
    setIsModalOpen(true);
    setFormError(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormError(null);
  };

  const addProduct = (formData) => {
    fetch(
      "https://6671686de083e62ee43b7889.mockapi.io/products/tableProducts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add product.");
        }
        return response.json();
      })
      .then((newProduct) => {
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        setFormError("Error adding product. Please try again.");
      });
  };

  return (
    <div className="buttons-block">
      <Link to="/product-preview">
        <TableButton icon={<UserIcon />} title={"Preview"} />
      </Link>
      <TableButton
        icon={<PlusSign />}
        title={"Add product"}
        onClick={openAddProductModal}
      />

      <AddButtonModal
        title={"Add product"}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <ProductForm onSubmit={addProduct} />
        {formError && <p className="error-message">{formError}</p>}
      </AddButtonModal>
    </div>
  );
};

export default ButtonsBlock;
