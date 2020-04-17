import React from "react";

const Product = (props) => {
   return (
      <div>
         <h4>Nazwa: {props.name}</h4>
         <article>Opis produktu o nzawie: {props.name}</article>
      </div>
   );
};

export default Product;
