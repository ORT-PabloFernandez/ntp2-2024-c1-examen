"use client";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import Customer from './Customer';

export default function PageCustomer() {
  const params = useParams()    
  const saleId = params["id"]
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/sales`)
    .then((response) => response.json())
    .then((data) => {
      const foundCustomer = data.find((sale)=> sale._id == saleId);
      setCustomer(foundCustomer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Customer customer={customer} />;
}
