"use client";
import "./sales.css";
import { useEffect, useState } from "react";
import SalesList from "./SalesList";

export default function SalesPage() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <SalesList Sales={sales} />
    </div>
  );
}
