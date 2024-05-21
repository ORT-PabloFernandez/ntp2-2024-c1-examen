"use client";
import { useState, useEffect } from "react";
import SaleList from "./SaleList";

export default function SalesPage(props) {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => setSales(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <SaleList Sales={sales} />
    </>
  );
}
