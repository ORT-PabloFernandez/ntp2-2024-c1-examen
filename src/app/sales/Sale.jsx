import Link from "next/link";
import React from "react";

function Sale(props) {
  return (
    <div className="flex flex-col items-center justify-center bg-stone-500 p-5 m-5">
      <h1>{props.storeLocation}</h1>
      <p>{props.saleDate}</p>
      <p>{props.purchaseMethod}</p>
      <Link className="text-red-950 font-bold" href={`/sales/${props.id}`}>
        Ver clientes
      </Link>
      
    </div>
  );
}

export default Sale;
