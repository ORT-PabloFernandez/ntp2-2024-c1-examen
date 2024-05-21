"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function VentaPage() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setVentas(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Sitio de Ventas</h1>
      <ul>
        {ventas.map((venta) => (
          <li key={venta._id} className="border-b border-gray-300 py-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Venta ID: {venta._id}
              </h2>
              <p><strong>Fecha:</strong> {venta.saleDate}</p>
              <p><strong>Ubicación de la Tienda:</strong> {venta.storeLocation}</p>
              <p><strong>Método de Compra:</strong> {venta.purchaseMethod}</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <div>
                <Link
                  href={`/cliente/${venta._id}`}
                  className="text-blue-600 hover:underline"
                >
                  
                  Ver datos del Cliente
                </Link>
              </div>
              <p>||</p>
              <div>
                <Link
                  href={`/productos/${venta._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Ver Productos de la Venta
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
