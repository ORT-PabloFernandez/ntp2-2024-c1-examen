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
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Customer details</div>
                            <ul className="mt-2 text-gray-500">
                                <li className="flex items-center py-1">
                                    <div className="mr-2 text-lg leading-6 font-medium text-black">Gender:</div>
                                    <div className="text-lg leading-6 font-medium text-gray-600">{sale.customer.gender}</div>
                                </li>
                                <li className="flex items-center py-1">
                                    <div className="mr-2 text-lg leading-6 font-medium text-black">Age:</div>
                                    <div className="text-lg leading-6 font-medium text-gray-600">{sale.customer.age}</div>
                                </li>
                                <li className="flex items-center py-1">
                                    <div className="mr-2 text-lg leading-6 font-medium text-black">Email:</div>
                                    <div className="text-lg leading-6 font-medium text-gray-600">{sale.customer.email}</div>
                                </li>
                                <li className="flex items-center py-1">
                                    <div className="mr-2 text-lg leading-6 font-medium text-black">Satisfaction:</div>
                                    <div className="text-lg leading-6 font-medium text-gray-600">{sale.customer.satisfaction}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
            )
        }
    </>
  );
}
