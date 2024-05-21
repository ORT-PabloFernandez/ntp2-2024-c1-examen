"use client";
import { useState, useEffect } from "react";

export default function ProductosDetails({ params }) {
  const { id } = params;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const venta = data.find((venta) => venta._id === id);
        const productosVenta = venta.items.map((item) => ({
          name: item.name,
          tags: item.tags,
          price: parseFloat(item.price.$numberDecimal), // Convertir a número flotante
          quantity: item.quantity,
        }));
        setProductos(productosVenta);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>

      <div className="px-4 py-2">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Datos de Productos:
        </h1>
        <ul className="text-gray-600">
          {productos.map((producto, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {producto.name}, &nbsp;
              <strong>Precio:</strong> {producto.price}, &nbsp;
              <strong>Cantidad:</strong> {producto.quantity}, &nbsp;
              <strong>Tags:</strong> {producto.tags.join(", ")}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-4 py-2 bg-gray-100">
        <h3 className="text-gray-800">Cliente JSON:</h3>
        <pre className="text-sm text-gray-600 overflow-x-auto">{JSON.stringify(productos, null, 2)}</pre>
      </div>

    </>
  );
}
