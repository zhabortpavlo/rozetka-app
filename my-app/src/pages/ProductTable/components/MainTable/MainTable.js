import React, { useState, useEffect } from "react";
import "./MainTable.css";
import PencilIcon from "../../../../assets/svg/PencilIcon";
import TrashIcon from "../../../../assets/svg/TrashIcon";

const MainTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6671686de083e62ee43b7889.mockapi.io/products/tableProducts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
                <TrashIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
