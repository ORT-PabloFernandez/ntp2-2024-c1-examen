"use client"
import { useEffect, useState } from "react";
import SalesList from "./Sales/salesList";
const URL = 'https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=0'
export default function Home() {
  const [sales, setSales] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(URL)
      .then(data => data.json())
      .then(data => setSales(data))
      .catch(err => console.error(err));
  }, [page])

  return (
    <div>
      <SalesList
      sales={sales}
      />
    </div>
  );
}
