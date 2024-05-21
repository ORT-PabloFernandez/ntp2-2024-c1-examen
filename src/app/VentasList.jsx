"use client";

import { useState, useEffect } from "react";
import Venta from "./Venta";

export default function VentasList() {
  const URL = "https://salesbackend.azurewebsites.net/api/sales?pageSize=100";
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => setVentas(data));
  });

  return (
    <ul className="grid grid-cols-3 gap-4 m-4 ">
      {ventas.map((v) => (
        <Venta
          _id={v._id}
          saleDate={v.saleDate}
          storeLocation={v.storeLocation}
          purchaseMethod={v.purchaseMethod}
        />
      ))}
    </ul>
  );
}
