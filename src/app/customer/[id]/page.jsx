"use client";
import { useState, useEffect } from "react";

export default function CustomerDetails({ params }) {
  const { id } = params;
  const [sale, setSales] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setSales(data.find((sale) => sale["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>Gender: {sale.customer?.gender}</h2>
      <h2>Age: {sale.customer?.age}</h2>
      <h2>Email: {sale.customer?.email}</h2>
      <h2>Satisfaction: {sale.customer?.satisfaction}</h2>
    </>
  );
}
