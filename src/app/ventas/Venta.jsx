import Link from "next/link";
import React from "react";

const Venta = (props) => {
  return (
    <li>
      <br />     
      <h2>Sale date: {props.saleDate}</h2>
      <h2>Store location: {props.storeLocation}</h2>
      <h2>Purchase method: {props.purchaseMethod}</h2>
      <Link href={`ventas/${props.id}/cliente`} >Client</Link> <br />
      <Link href={`ventas/${props.id}/productos`} >Product</Link>
    </li>
  );
};

export default Venta;
