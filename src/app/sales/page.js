"use client";
import { useState, useEffect } from "react";
import SalesList from "./SalesList.jsx";



const mockSales = [{
    "_id": "5bd761dcae323e45a93cd02b",
    "saleDate": "2014-08-11T02:29:30.467Z",
    "items": [
        {
            "name": "envelopes",
            "tags": [
                "stationary",
                "office",
                "general"
            ],
            "price": {
                "$numberDecimal": "20.19"
            },
            "quantity": 9
        },
        {
            "name": "backpack",
            "tags": [
                "school",
                "travel",
                "kids"
            ],
            "price": {
                "$numberDecimal": "107.94"
            },
            "quantity": 2
        },
        {
            "name": "notepad",
            "tags": [
                "office",
                "writing",
                "school"
            ],
            "price": {
                "$numberDecimal": "13.33"
            },
            "quantity": 3
        },
        {
            "name": "pens",
            "tags": [
                "writing",
                "office",
                "school",
                "stationary"
            ],
            "price": {
                "$numberDecimal": "54.85"
            },
            "quantity": 4
        },
        {
            "name": "binder",
            "tags": [
                "school",
                "general",
                "organization"
            ],
            "price": {
                "$numberDecimal": "24.41"
            },
            "quantity": 5
        },
        {
            "name": "envelopes",
            "tags": [
                "stationary",
                "office",
                "general"
            ],
            "price": {
                "$numberDecimal": "6.12"
            },
            "quantity": 6
        },
        {
            "name": "laptop",
            "tags": [
                "electronics",
                "school",
                "office"
            ],
            "price": {
                "$numberDecimal": "789.22"
            },
            "quantity": 4
        },
        {
            "name": "printer paper",
            "tags": [
                "office",
                "stationary"
            ],
            "price": {
                "$numberDecimal": "39.07"
            },
            "quantity": 9
        },
        {
            "name": "binder",
            "tags": [
                "school",
                "general",
                "organization"
            ],
            "price": {
                "$numberDecimal": "20.99"
            },
            "quantity": 4
        },
        {
            "name": "notepad",
            "tags": [
                "office",
                "writing",
                "school"
            ],
            "price": {
                "$numberDecimal": "9.44"
            },
            "quantity": 1
        }
    ],
    "storeLocation": "Austin",
    "customer": {
        "gender": "M",
        "age": 62,
        "email": "puvcup@tuiremo.gm",
        "satisfaction": 5
    },
    "couponUsed": false,
    "purchaseMethod": "In store"
}];



export default function SalePage() {
  // const [sales, setSales] = useState(mockSales);
  const [sales, setSales] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };
  
  const prevPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">SALES</h1>
      <SalesList sales={sales} />
      <div className="flex justify-center mt-4">
        <button onClick={prevPage} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded m-20">Previous</button>
        <button onClick={nextPage} className="px-4 py-2 ml-2 bg-blue-500 text-white rounded m-20">Next</button>
      </div>
    </div>
  );
}