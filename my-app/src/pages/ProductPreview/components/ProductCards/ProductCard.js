import "./ProductCard.css";
import ShopingCart from "../../../../assets/svg/ShopingCart";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, name, price, amount, image, readyToShip } = product;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="main-card" onClick={handleCardClick}>
      <div className="img-description">
        <img src={image} alt="" className="test-img" />
        <p>{name}</p>
      </div>
      <div className="product-price">
        <p className="price">{price}</p>
        <p className="amount">Кількість: {amount}</p>
      </div>
      <div className="shoping-cart">
        <ShopingCart />
        <p>
          {readyToShip ? "Готовий до відправки" : "Не готовий до відправки"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
