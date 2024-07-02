import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import productImage from "../../assets/svg/laptop.svg";
import BackSign from "../../assets/svg/BackSign";
import TableLogo from "../../assets/svg/TableLogo";
import TableButton from "../../components/TableButton/TableButton";

const products = [
  {
    id: 0,
    name: "Ноутбук Lenovo Y50-70 Aluminium Black",
    price: "25000$",
    amount: 6,
    image: productImage,
    readyToShip: true,
    description:
      "15.6-дюймовий дисплей стандарту Full HD\nФільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 × 1080).\n\nДинаміки преміум-класу\nСтереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики.\n\nDolby Advanced Audio\nDolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кристалево чіткий просторовий звук за допомогою вбудованих динаміків.",
  },
  {
    id: 1,
    name: "Ноутбук Asus ROG Strix",
    price: "30000$",
    amount: 4,
    image: productImage,
    readyToShip: true,
    description:
      "15.6-дюймовий дисплей стандарту Full HD\nФільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 × 1080).\n\nДинаміки преміум-класу\nСтереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики.\n\nDolby Advanced Audio\nDolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кристалево чіткий просторовий звук за допомогою вбудованих динаміків.",
  },
  {
    id: 2,
    name: "Ноутбук HP Pavilion",
    price: "28000$",
    amount: 5,
    image: productImage,
    readyToShip: false,
    description:
      "15.6-дюймовий дисплей стандарту Full HD\nФільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 × 1080).\n\nДинаміки преміум-класу\nСтереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики.\n\nDolby Advanced Audio\nDolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кристалево чіткий просторовий звук за допомогою вбудованих динаміків.",
  },
  {
    id: 3,
    name: "Ноутбук Dell Inspiron",
    price: "27000$",
    amount: 7,
    image: productImage,
    readyToShip: true,
    description:
      "15.6-дюймовий дисплей стандарту Full HD\nФільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 × 1080).\n\nДинаміки преміум-класу\nСтереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики.\n\nDolby Advanced Audio\nDolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кристалево чіткий просторовий звук за допомогою вбудованих динаміків.",
  },
  {
    id: 4,
    name: "Ноутбук Acer Aspire",
    price: "26000$",
    amount: 3,
    image: productImage,
    readyToShip: true,
    description:
      "15.6-дюймовий дисплей стандарту Full HD\nФільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 × 1080).\n\nДинаміки преміум-класу\nСтереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики.\n\nDolby Advanced Audio\nDolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кристалево чіткий просторовий звук за допомогою вбудованих динаміків.",
  },
  {
    id: 5,
    name: "Ноутбук Apple MacBook Pro",
    price: "35000$",
    amount: 2,
    image: productImage,
    readyToShip: false,
    description:
      "15.6-дюймовий дисплей стандарту Full HD\nФільми, малюнки та ігри немов оживають на дисплеї стандарту Full HD (1920 × 1080).\n\nДинаміки преміум-класу\nСтереофонічні динаміки JBL, що забезпечують розкішне звучання з ефектом присутності, ідеально підходять для відео, ігор і музики.\n\nDolby Advanced Audio\nDolby Advanced Audio — це технологія, завдяки якій на ноутбуці можна відтворити кристалево чіткий просторовий звук за допомогою вбудованих динаміків.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find((p) => p.id === parseInt(id));
    setProduct(product);
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className="header">
        <TableLogo />
      </div>
      <div className="product-details">
        <TableButton
          icon={<BackSign />}
          title={" -Back"}
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
