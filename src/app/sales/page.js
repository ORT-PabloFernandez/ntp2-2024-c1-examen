"use client";
import { useEffect, useState } from "react";
import SalesList from "./SalesList.jsx";

const URL =
  "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1";

export default function SalesHome() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <SalesList Sales={sales} />
    </>
  );
}
