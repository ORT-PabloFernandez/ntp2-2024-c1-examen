"use client";
import { createContext, useEffect, useState } from "react";

export const SalesContext = createContext();

export function SalesProvider({ children }) {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    let fetchSales = async () => {
      try {
        const res = await fetch(
          "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch sales data");
        }

        const salesData = await res.json();

        setSales(salesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSales();
  }, []);

  console.log(sales);

  return (
    <SalesContext.Provider value={sales}>{children}</SalesContext.Provider>
  );
}
