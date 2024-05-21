"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/sales/Loading";

export default function PageDetails({ params }) {
  const { id } = params;
  const [sale, setSale] = useState(null);

  useEffect(() => {
    fetch(
      localStorage.getItem("url")
    )
      .then((response) => response.json())
      .then((data) => {
        setSale(data.find((sale) => sale["_id"] === id));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
        {
          sale === null
          ?
            (
              <Loading/>
            )
          :
            (
            <>
                <div className="flex flex-wrap justify-around items-center">
                    {sale.items.map((item, index) => (
                      <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4 border-4 border-blue-500 bg-white">
                        <div className="px-6 py-4">
                        <p className="text-gray-700 text-base">
                            Name: {item.name}
                          </p>
                          <p className="text-gray-700 text-base">
                            Price: {item.price.$numberDecimal}
                          </p>
                          <p className="text-gray-700 text-base">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
            </>
            )
        }
    </>
  );
}