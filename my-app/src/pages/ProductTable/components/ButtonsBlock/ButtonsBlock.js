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
  const [modalTitle, setModalTitle] = useState("Add product");
  const [initialData, setInitialData] = useState({});

  const openAddProductModal = () => {
    setModalTitle("Add product");
    setInitialData({});
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

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
        title={modalTitle}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <ProductForm initialData={initialData} />
      </AddButtonModal>
    </div>
  );
};

export default ButtonsBlock;
