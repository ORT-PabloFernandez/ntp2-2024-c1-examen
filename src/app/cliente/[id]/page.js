"use client";
import { useState, useEffect } from "react";

export default function ClienteDetails({ params }) {
  const { id } = params;
  const [cliente, setCliente] = useState([]);
  //const [gender, setGender] = useState([]);

  //console.log(id);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const venta = data.find((venta) => venta._id === id);
        setCliente(venta.customer);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>

      <div className="px-4 py-2">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Datos del venta</h1>
        <ul className="text-gray-600">
          <li><strong>Genero:</strong> {cliente.gender === "F" ? "👩‍🦰 Femenino" : "👨 Masculino"}</li>
          <li><strong>Edad:</strong> {cliente.age}</li>
          <li><strong>Email:</strong> {cliente.email}</li>
          <li><strong>Satisfaccion:</strong> {cliente.satisfaction}</li>
        </ul>
      </div>
      <div className="px-4 py-2 bg-gray-100">
        <h3 className="text-gray-800">Cliente JSON:</h3>
        <pre className="text-sm text-gray-600 overflow-x-auto">{JSON.stringify(cliente, null, 2)}</pre>
      </div>

    </>
  );
}
