"use client";
import { useState, useEffect } from "react";
import SalesList from "./SalesList.jsx";

export default function PageSales() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await fetch(
          "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
        );
        const data = await response.json();
        setSales(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchSales();
  }, []);

  return (
    <>
      <SalesList Sales={sales} />
    </>
  );
}
