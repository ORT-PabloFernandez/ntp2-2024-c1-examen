"use client";
import { useEffect, useState } from "react";
import Customer from "../Customer/Customer";

export default function pageCustomerDetails({ params }) {
  const [sale, setSale] = useState([]);
  const [customer, setCustomer] = useState(null);
  const { id } = params;

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setSale(data.find((sale) => sale._id === id));
        if (sale) {
          setCustomer(sale.customer);
        }
      });
  }, [id]);

  return (
    <div>
      <Customer customer={customer} />
    </div>
  );
}
