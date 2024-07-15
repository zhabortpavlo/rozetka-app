import React from "react";
import "./ProductForm.css";

const ProductForm = ({ initialData = {} }) => {
  const {
    category = "",
    name = "",
    quantity = "",
    price = "",
    description = "",
  } = initialData;

  return (
    <form>
      <div className="form-group">
        <label>Category</label>
        <input type="text" defaultValue={category} />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" defaultValue={name} />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input type="number" defaultValue={quantity} />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="number" defaultValue={price} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea defaultValue={description}></textarea>
      </div>
      <div className="form-actions">
        <button type="button">Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ProductForm;
