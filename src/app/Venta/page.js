"use client";
import React, { useState, useEffect } from "react";
import VentaLista from "./VentaLista";

export default function PageMovie() {
  const [ventas, setVentas] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://salesbackend.azurewebsites.net/api/sales?pageSize=12&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVentas(data);
      })
      .catch((error) => console.log(error));
  }, [page]);

  const pageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="pagination">LISTA DE VENTAS</div>

      <div>
        <VentaLista Ventas={ventas} />
      </div>

      <div className="pagination">
        {ventas.length > 0 && (
          <div>
            <button
              className="pagination-button"
              onClick={() => pageChange(page - 1)}
              disabled={page <= 1}
            >
              Anterior
            </button>
            <span>Página {page}</span>
            <button
              className="pagination-button"
              onClick={() => pageChange(page + 1)}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
