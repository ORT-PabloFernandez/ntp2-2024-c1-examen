"use client";
import { useState, useEffect } from "react";

export default function PageDetails({ params }) {
  const { id } = params;
  const [venta, setventa] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setventa(data.find((venta) => venta._id === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>{JSON.stringify(venta.customer)}</h2>
    </>
  );
}