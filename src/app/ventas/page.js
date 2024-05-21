"use client";

import VentasList from "./VentasList";

import { useEffect, useState } from "react";

export default function VentasPage(props){
    const [ventas, setVentas] = useState([]);
    const url = "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1";

   
    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setVentas(data);
        }).catch((error) => console.error(error));
    },[])

    return (
        <>
            <VentasList ventas={ventas} />
        </>
            
    );
}