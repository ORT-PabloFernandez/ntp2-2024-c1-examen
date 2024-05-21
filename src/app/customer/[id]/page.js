"use client";
import { useState, useEffect } from "react";

export default function CustomerPage({ params }) {
  const { _id } = params;
  const URL = "https://salesbackend.azurewebsites.net/api/sales?pageSize=100";
  const [venta, setVenta] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setVenta(data.find((venta) => venta["_id"] === _id));
      });
  });

  const customer = venta.customer;

  return (
    <div className="m-4">
      <h1>Gender: {customer["gender"]}</h1>
      <h1>Age: {customer["age"]}</h1>
      <h1>Email: {customer["email"]}</h1>
      <h1>Satisfaction: {customer["satisfaction"]}</h1>
    </div>
  );
}
