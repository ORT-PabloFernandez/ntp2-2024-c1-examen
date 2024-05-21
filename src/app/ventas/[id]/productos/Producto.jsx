import React from "react";

const Venta = (props) => {
  return (
    <li>
      <br/>
      <h2>Product name: {props.nombre}</h2>
      <h2>Product price: {props.precio}</h2>
      <h2>Product quantity: {props.cantidad}</h2>
    </li>
  );
};

export default Venta;
