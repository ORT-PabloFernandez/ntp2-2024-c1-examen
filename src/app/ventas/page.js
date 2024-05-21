"use client";
import { useState, useEffect } from "react";
import VentaList from "./VentaList";


export default function VentaPage() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setVentas(data);
        
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <VentaList Ventas={ventas} />
    </>
  );
}