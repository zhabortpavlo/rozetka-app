import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/Login/Login";
import MainTablePage from "./pages/ProductTable/MainTablePage";
import ProductPreviewMain from "./pages/ProductPreview/ProductPreviewMain";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main-table-page" element={<MainTablePage />} />
      <Route path="/product-preview" element={<ProductPreviewMain />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
