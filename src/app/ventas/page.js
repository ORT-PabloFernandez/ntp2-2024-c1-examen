"use client";
import { useState, useEffect } from "react";
import VentasList from "./VentasList";
 
export default function UserPage() {
  const [ventas, setventas] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setventas(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <VentasList Ventas={ventas}/>
    </>
  );
}