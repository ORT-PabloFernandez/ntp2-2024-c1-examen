"use client";
import { useState, useEffect } from "react";
import CustomerList from "./CustomerList";

//https://salesbackend.azurewebsites.net/api/sales

export default function VentaPage() {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data);
        
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <CustomerList Customers={customers} />
    </>
  );
}