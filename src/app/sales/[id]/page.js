"use client";
import { useState, useEffect } from "react";
//import Customer from "../customer/Customer.jsx"

const URL =
  "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1";

export default function Details({ params }) {
  const { id } = params;
  const [sale, setSale] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setSale(data.find((sale) => sale["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>{sale.saleDate}</h1>
    </>
  );
}
