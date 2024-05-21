//Busca nuevamente el objeto sale dentro de las primeras 100.
"use client";
import { useState, useEffect } from "react";
import ClientDetails from "../ClientDetails";
import ProductDetails from "../ProductDetails";

export default function SaleDetails({ params }) {
  const { id } = params;
  const [sale, setSale] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => setSale(data.find((sale) => sale._id === id)))
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className="purchase-details">
      <div className="section">
        <h1 className="section-title">Datos de la venta</h1>
        <h2 className="sale-date">Fecha de compra: {sale.saleDate}</h2>
        <h2 className="store-location">Ciudad de tienda: {sale.storeLocation}</h2>
        <h2 className="purchase-method">Metodo de pago: {sale.purchaseMethod}</h2>
      </div>
      <ClientDetails Client={sale.customer} />
      <ProductDetails Products={sale.items} />
    </div>
  );
}
