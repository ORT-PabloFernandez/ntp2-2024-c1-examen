"use client";

import { useEffect, useState } from "react";
import Customer from "../Customer/Customer";
export default function PageClienteDetail({ params }) {
  const { id } = params;

  const [saleDetail, setSale] = useState({});

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/sales?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSale(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Customer
        gender={saleDetail.gender}
        age={saleDetail.age}
        email={saleDetail.email}
        satisfaction={saleDetail.satisfaction}
      />
    </>
  );
}
