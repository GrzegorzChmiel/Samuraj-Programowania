import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductListPage.css";

const products = ["car", "bike", "motorcycle"];

function convertToListItem(product) {
   return (
      <li key={product}>
         <Link to={`/product/${product}`}>{product}</Link>
      </li>
   );
}

const ProductListPage = () => {
   const productListItems = products.map(convertToListItem);
   return (
      <div className="products">
         <h3>Lista produktów</h3>
         <ul>{productListItems}</ul>
      </div>
   );
};

export default ProductListPage;
