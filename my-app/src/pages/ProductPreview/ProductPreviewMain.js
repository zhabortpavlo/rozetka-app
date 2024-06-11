import "./ProductPreviewMain.css";
import TableLogo from "../../assets/svg/TableLogo";
import ProductCard from "./components/ProductCards/ProductCard";
const ProductPreviewMain = () => {
  return (
    <>
      <div className="header">
        <TableLogo />
      </div>

      <div className="cards-block">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default ProductPreviewMain;
