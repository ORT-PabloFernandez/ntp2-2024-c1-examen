'use client'
import { useEffect, useState } from "react";
import SalesList from "./SalesList";
import Pagination from "../components/Pagination";

export default function sales() {
  const [sales, setSales] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 50;
  const totalPages = 100;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchPage(page);
  };
  
  useEffect (()=>{
    fetchPage(currentPage)
  },[]);

function fetchPage(page){
  fetch(`https://salesbackend.azurewebsites.net/api/sales?pageSize=${pageSize}&page=${page}`)
  .then(response=>
    response.json()
  )
  .then((data)=> setSales(data))
  .catch(error => console.log(error));
}

  return (
    <>
        <SalesList sales={sales}/>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
    </>
  );
}
