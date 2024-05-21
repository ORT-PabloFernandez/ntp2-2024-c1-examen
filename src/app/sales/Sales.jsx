import React from "react";
import Link from "next/link";
import "./sales.css";

export default function Sales (props){

  return (
    <li  className="customer">
      <h1>{props.Date}</h1>
      <h2>{props.Location}</h2>
      <h5>{props.Method}</h5>
      <Link href={`/customer/${props.SaleId}`}>
        <h7>View Customer Details</h7>
      </Link>
      <br />
      <Link href={`/customer/${props.SaleId}`}>
        <h7>View Items Details</h7>
      </Link>
    </li>
  );
};
