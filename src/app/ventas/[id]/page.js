"use client";

import { useEffect, useState } from "react";
import Customer from "./customer"

export default function PageClienteDetail({params}){
    const {Key} = params;

    const[ventaDetail, setVenta] = useState([])

    useEffect(()=>{
        fetch(
            "https://salesbackend.azurewebsites.net/api/sales"
        )
        .then((response)=>response.json())
        
        .then((data)=>{
            setVenta(data.find(venta => venta._id === Key))
        })
        .catch((error)=>console.log(error))
    }, []);

    return (
        <>
            <h3>{ventaDetail.customer}</h3>
            <Customer Venta={ventaDetail}/>
        </>
    ); 
}