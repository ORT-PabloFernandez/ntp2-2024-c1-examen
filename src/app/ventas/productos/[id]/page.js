"use client";
import React, { useState, useEffect } from "react";

export default function PageDetails({ params }) {
  const { id } = params;
  const [venta, setVenta] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setVenta(data.find((venta) => venta._id === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Detalles de la venta</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {venta.items &&
            venta.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>${parseFloat(item.price.$numberDecimal).toFixed(2)}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}