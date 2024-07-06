import React, { useState, useEffect } from "react";
import "./MainTable.css";
import PencilIcon from "../../../../assets/svg/PencilIcon";
import TrashIcon from "../../../../assets/svg/TrashIcon";

const MainTable = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  useEffect(() => {
    fetch("https://6671686de083e62ee43b7889.mockapi.io/products/tableProducts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const openModal = (productId) => {
    setProductIdToDelete(productId);
    setShowModal(true);
  };

  const closeModal = () => {
    setProductIdToDelete(null);
    setShowModal(false);
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
        closeModal();
      })
      .catch((error) => console.error("Error deleting product:", error));
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
                <PencilIcon />
              </td>
              <td>
                <TrashIcon onClick={() => openModal(row.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Підтвердити видалення</h2>
            <p>Ви впевненні що хочете видалити цей продукт?</p>
            <div className="modal-buttons">
              <button onClick={handleDelete}>Видалити</button>
              <button onClick={closeModal}>Відміна</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainTable;
