"use client";

import Customer from "./Customer";

import { useEffect, useState } from "react";

export default function CustomerPage({ params }){
    const { id } = params;
    const [customer, setCustomer] = useState([]);
    const url = "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const venta = data.find((venta) => venta["_id"] === id);
        setCustomer(venta.customer);
      })
      .catch((error) => console.log(error));
  }, []);


    return (
        <Customer 
        gender={customer.gender}
          age={customer.age}
          email={customer.email}
          satisfaction={customer.satisfaction}
        />
    );
}