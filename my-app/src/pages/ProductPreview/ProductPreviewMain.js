import "./ProductPreviewMain.css";
import TableLogo from "../../assets/svg/TableLogo";
import ProductCard from "./components/ProductCards/ProductCard";
import productImage from "../../assets/svg/laptop.svg";

const products = [
  {
    id: 0,
    name: "Ноутбук Lenovo Y50-70 Aluminium Black",
    price: "25000$",
    amount: 6,
    image: productImage,
    readyToShip: true,
  },
  {
    id: 1,
    name: "Ноутбук Asus ROG Strix",
    price: "30000$",
    amount: 4,
    image: productImage,
    readyToShip: true,
  },
  {
    id: 2,
    name: "Ноутбук HP Pavilion",
    price: "28000$",
    amount: 5,
    image: productImage,
    readyToShip: false,
  },
  {
    id: 3,
    name: "Ноутбук Dell Inspiron",
    price: "27000$",
    amount: 7,
    image: productImage,
    readyToShip: true,
  },
  {
    id: 4,
    name: "Ноутбук Acer Aspire",
    price: "26000$",
    amount: 3,
    image: productImage,
    readyToShip: true,
  },
  {
    id: 5,
    name: "Ноутбук Apple MacBook Pro",
    price: "35000$",
    amount: 2,
    image: productImage,
    readyToShip: false,
  },
];

const ProductPreviewMain = () => {
  return (
    <>
      <div className="header">
        <TableLogo />
      </div>

      <div className="cards-block">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductPreviewMain;
