import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = (props) => {
   return (
      <div>
         <h3>Produkt</h3>
         <Product name={props.match.params.name}></Product>
         <Link to="/products">Powrót - lista produktów</Link>
      </div>
   );
};

export default ProductPage;
