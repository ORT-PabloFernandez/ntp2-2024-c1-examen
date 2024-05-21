import React from "react";

function Product(props) {
  return (
    <div>
      <h1>Nombre: {props.name}</h1>
      <p>Cantidad: {props.quantity}</p>
      <p>Precio: {props.price}</p>
    </div>
  );
}

export default Product;
