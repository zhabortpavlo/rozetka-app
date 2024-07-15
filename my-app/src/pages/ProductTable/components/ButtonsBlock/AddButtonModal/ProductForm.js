import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(
    initialData || {
      category: "",
      name: "",
      quantity: "",
      price: "",
      description: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.category ||
      !formData.name ||
      !formData.quantity ||
      !formData.price
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    onSubmit(formData);
    setFormData({
      category: "",
      name: "",
      quantity: "",
      price: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Price ($)</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ProductForm;
