"use client"
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';

export default function ItemDetailPage() {
  const { saleId } = useParams();
  const [sale, setSale] = useState(null);

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/sales`)
      .then((response) => response.json())
      .then((data) => {
        const foundSale = data.find(sale => sale["_id"] == saleId);
        setSale(foundSale);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Detalles del Artículo</h1>
      {sale ? (
        <div>
          <h2>Nombre: {sale.items.name}</h2>
          <p>Precio: ${sale.items.price.$numberDecimal}</p>
          <p>Cantidad: {sale.items.quantity}</p>
        </div>
      ) : (
        <p>Cargando artículo...</p>
      )}
    </div>
  );
}
