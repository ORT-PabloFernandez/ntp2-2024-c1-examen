// Sale.jsx
import React from "react";
import Link from "next/link";
import SaleDetail from "./SaleDetails";

export default function Sale(props) {
  return (
    <div style={{ flex: "0 0 calc(50% - 20px)", margin: "10px", display: "flex" }}>
      <div style={{ flex: "1" }}>
        <Link href={`sales/${props.Id}`}>
          <h2 style={{ margin: "0 0 5px 0", fontSize: "1.2em" }}>
            Comprado el día: {props.SaleDate}
          </h2>
        </Link>
        <p>Location: {props.StoreLocation}</p>
        <p>Método de compra: {props.PurchaseMethod}</p>
        <SaleDetail items={props.items} />
      </div>
    </div>
  );
}

