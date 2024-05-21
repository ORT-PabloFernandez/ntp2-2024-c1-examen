import React, {useEffect, useState} from 'react';
import SalesList from "@/SalesList"

export default function SalesPage(){
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const[page, setPage]= useState(1);
    const[totalPage, setTotalPage] = useState(1);
    
    useEffect(() => {
      fetch("https://salesbackend.azurewebsites.net/api/sales")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Problema de Network");
          }
          return response.json();
        })
        .then((data) => {
          setSales(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Hubo un problema con ", error);
          setError(error);
          setLoading(false);
        });
    }, [page]);

    const handleNextPage = () => setPage((prev) => prev + 1);
    const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));

    if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
    return (
       <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales</h1>
      <SalesList sales={sales} />
      <div className="mt-4 flex justify-between">
        <button onClick={handlePrevPage} disabled={page === 1} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
          Previous
        </button>
        <button onClick={handleNextPage} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </main>
  );
  }



 
