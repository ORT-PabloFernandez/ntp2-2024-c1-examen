import React from "react";

export default function SaleDetail({ items }) {
  return (
    <div>
      <h2>Detalle de Productos:</h2>
      {items.map((item) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ marginRight: "10px" }}>Nombre: {item.name}</p>
          <p style={{ marginRight: "10px" }}>Precio: {item.price.$numberDecimal}</p>
          <p>Cantidad: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

