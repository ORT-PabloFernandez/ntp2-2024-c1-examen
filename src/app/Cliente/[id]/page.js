"use client";
import React, { useState, useEffect } from "react";
import Cliente from "../Cliente";

export default function PageCliente({ params }) {
  const { id } = params;
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/sales`)
      .then((response) => response.json())
      .then((data) => {
        setCliente(data.find((cliente) => cliente["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="pagination">Detalle de Cliente</div>
      <div>
        <Cliente
          Id={cliente["saleDate"]}
          SaleDate={cliente["saleDate"]}
          Gender={cliente["gender"]}
          Age={cliente["age"]}
        />
      </div>
    </div>
  );
}
