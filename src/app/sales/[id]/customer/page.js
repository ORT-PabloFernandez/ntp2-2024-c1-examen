"use client";
import { useState, useEffect } from "react";
import { FaUser } from 'react-icons/fa';


export default function Customer(props) {
  const [sale, setSale] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!sale) {
      fetch(
        `https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=${page}`
      )
        .then((response) => response.json())
        .then((data) => {
          const foundSale = data.find((sale) => sale._id == props.params.id);
          if (foundSale) {
            setSale(foundSale);
          } else {
            setPage(page + 1);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [page, sale]);

  if (!sale) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
        <div className="flex items-center mb-4">
          <FaUser size={30} className="mr-2 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">{sale.customer.name}</h2>
            <p className="text-sm text-gray-600">Customer Details</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-sm font-semibold text-gray-700">Gender:</p>
            <p className="text-sm text-gray-600">{sale.customer.gender}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Age:</p>
            <p className="text-sm text-gray-600">{sale.customer.age}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Email:</p>
            <p className="text-sm text-gray-600">{sale.customer.email}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Satisfaction:</p>
            <p className="text-sm text-gray-600">{sale.customer.satisfaction}</p>
          </div>
        </div>
      </div>
    </div>
  );
}