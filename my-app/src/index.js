import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Login from "./pages/Login/Login";
import MainTablePage from './pages/ProductTable/MainTablePage';
// import ProductPreviewMain from "./pages/ProductPreview/ProductPreviewMain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <MainTablePage/>
    {/* <ProductPreviewMain /> */}
  </React.StrictMode>
);
