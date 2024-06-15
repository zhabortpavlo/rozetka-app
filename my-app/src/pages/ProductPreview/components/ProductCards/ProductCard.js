import "./ProductCard.css";
import ShopingCart from "../../../../assets/svg/ShopingCart";

const ProductCard = ({ product }) => {
  const { name, price, amount, image, readyToShip } = product;

  return (
    <div className="main-card">
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
