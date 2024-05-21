"use client"
import { useState, useEffect } from "react";
import SaleList from "./SaleList";

export default function SalesPage() {
  const [sales, setSales] = useState([]);
  const [page , setPage] = useState(1);

  useEffect(() => {
    fetchSales();
  }, [page]);

  const fetchSales = () => {
    fetch(
      `https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
      })
      .catch((error) => console.log(error));
  };

  const pageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="pagination">
        {sales.length > 0 && ( 
          <div>
            <button className="pagination-button" onClick={() => pageChange(page - 1)} disabled={page <= 1}>
              Anterior
            </button>
            <span>Página {page}</span>
            <button className="pagination-button" onClick={() => pageChange(page + 1)}>Siguiente</button>
          </div>
        )}
      </div>
      <SaleList Sales={sales} />
    </div>
  );
}
