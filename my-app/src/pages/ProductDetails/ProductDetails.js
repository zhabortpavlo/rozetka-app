import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import productImage from "../../assets/svg/laptop.svg";
import BackSign from "../../assets/svg/BackSign";
import TableLogo from "../../assets/svg/TableLogo";
import TableButton from "../../components/TableButton/TableButton";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://6671686de083e62ee43b7889.mockapi.io/products/ProductDetailsTable`
        );
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        const product = data.find((p) => p.id === parseInt(id));
        if (!product) {
          throw new Error("Product not found");
        }
        product.image = productImage;
        setProduct(product);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="header">
        <TableLogo />
      </div>
      <div className="product-details">
        <TableButton
          icon={<BackSign />}
          title={"Back"}
          className="backButton"
          onClick={handleBackClick}
        />
        <div className="product-header">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="availability">
              <span
                className={`status ${
                  product.readyToShip ? "in-stock" : "out-of-stock"
                }`}
              >
                {product.readyToShip ? "Є в наявності" : "Немає в наявності"}
              </span>
            </div>
            <div className="price">{product.price}</div>
            <div className="amount">Кількість: {product.amount}</div>
          </div>
        </div>
        <div className="product-description">
          <h2>Опис</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
