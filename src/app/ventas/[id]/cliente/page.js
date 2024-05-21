"use client";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { id } = params;
  const [cliente, setCliente] = useState({});

  useEffect(() => {
    fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1")
      .then((response) => response.json())
      .then((data) => {
        const ventaEncontrada = data.find((venta) => venta["_id"] === id);
        if (ventaEncontrada) {
          setCliente(ventaEncontrada.customer);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Client</h1>
      <h3>Gender: {cliente.gender}</h3>
      <h3>Age: {cliente.age}</h3>
      <h3>Email: {cliente.email}</h3>
      <h3>Satisfaction: {cliente.satisfaction}</h3>
    </div>
  );
};

export default Page;
