"use client";
import CustomerList from "@/app/custmers/CustomerList";
import { useState, useEffect } from "react";
export default function PageDetails({ params }) {
  const { id } = params;
  const [venta, setVenta] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setVenta(data.find((venta) => venta["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    </div>
  );
  
}
