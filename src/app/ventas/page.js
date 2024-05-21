"use client";
import React, { useEffect, useState } from "react";
import VentasLista from "./VentasLista";

const Page = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setVentas(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <VentasLista Ventas={ventas} />
    </div>
  );
};

export default Page;
