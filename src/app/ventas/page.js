"use client";
import { useEffect, useState } from "react";
import VentasList from "./ventasList";

export default function PageVentasList() {

  const[ventas, setVentas] = useState([])

    useEffect(()=>{
        fetch(
            "https://salesbackend.azurewebsites.net/api/sales"
        )
        .then((response)=>response.json())
        
        .then((data)=>{
            setVentas(data)
        })
        .catch((error)=>console.log(error))
    }, []);

  return (
    <>

      <VentasList Ventas={ventas}/>
    </>
  );
}