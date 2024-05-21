"use client";
import { useEffect, useState } from "react";
import ProductosLista from "./ProductosLista";

const Page = ({ params }) => {
  const { id } = params;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const ventaEncontrada = data.find((venta) => venta["_id"] === id);
        if (ventaEncontrada) {
          setProductos(ventaEncontrada.items);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ProductosLista Productos={productos} />
    </div>
  );
};

export default Page;
