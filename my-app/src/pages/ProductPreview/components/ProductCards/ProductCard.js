import "./ProductCard.css";
import ShopingCart from "../../../../assets/svg/ShopingCart";
import productImage from "../../../../assets/svg/laptop.svg";

const ProductCard = () => {
  return (
    <div className="main-card">
      <div className="img-description">
        <img src={productImage} alt="" className="test-img" />

        <p>Ноутбук Lenovo Y50-70 Aluminium Black</p>
      </div>
      <div className="product-price">
        <p className="price">25000$</p>
        <p className="amount">Кількість: 6</p>
      </div>
      <div className="shoping-cart">
        <ShopingCart />
        <p>Готовий до відправки</p>
      </div>
    </div>
  );
};

export default ProductCard;
