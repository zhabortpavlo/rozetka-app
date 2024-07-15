import React, { useState, useEffect } from "react";
import "./MainTable.css";
import PencilIcon from "../../../../assets/svg/PencilIcon";
import TrashIcon from "../../../../assets/svg/TrashIcon";
import AddButtonModal from "../ButtonsBlock/AddButtonModal/AddButtonModal";
import ProductForm from "../ButtonsBlock/AddButtonModal/ProductForm";

const MainTable = () => {
  const [data, setData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    fetch("https://6671686de083e62ee43b7889.mockapi.io/products/tableProducts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const openDeleteModal = (productId) => {
    setProductIdToDelete(productId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setProductIdToDelete(null);
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    fetch(
      `https://6671686de083e62ee43b7889.mockapi.io/products/tableProducts/${productIdToDelete}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then(() => {
        setData(data.filter((row) => row.id !== productIdToDelete));
        closeDeleteModal();
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const openEditModal = (product) => {
    setProductToEdit(product);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setProductToEdit(null);
    setShowEditModal(false);
  };

  return (
    <div className="table-block">
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price (₴)</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.category}</td>
              <td>{row.name}</td>
              <td>{row.quantity}</td>
              <td>{row.price}</td>
              <td>
                <PencilIcon onClick={() => openEditModal(row)} />
              </td>
              <td>
                <TrashIcon onClick={() => openDeleteModal(row.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Підтвердити видалення</h2>
            <p>Ви впевнені, що хочете видалити цей продукт?</p>
            <div className="modal-buttons">
              <button onClick={handleDelete}>Видалити</button>
              <button onClick={closeDeleteModal}>Відміна</button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <AddButtonModal
          title="Edit product"
          isOpen={showEditModal}
          onClose={closeEditModal}
        >
          <ProductForm initialData={productToEdit} />
        </AddButtonModal>
      )}
    </div>
  );
};

export default MainTable;
