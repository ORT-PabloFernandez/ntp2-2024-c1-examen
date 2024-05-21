"use client";
import { useState, useEffect } from "react";
import ProductList from "../ProductList";

export default function ProductsPage(params) {
  const { id } = params;
  const [sale, setSale] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setSale(data.find((sale) => sale["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ProductList Products={sale.items} />
    </>
  );
}
