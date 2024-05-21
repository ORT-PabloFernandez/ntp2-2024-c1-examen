import Link from "next/link";
import React from "react";

function Sale(props) {
  return (
    <div className="flex flex-col items-center justify-center bg-stone-500 p-5 m-5 transition:smooth hover:scale-105 duration-75">
      <h1>{props.storeLocation}</h1>
      <p>{props.saleDate}</p>
      <p>{props.purchaseMethod}</p>
      <Link
        className="text-red-950 font-bold hover:uppercase"
        href={`/sales/${props.id}`}
      >
        Ver clientes
      </Link>
      <Link
        className="text-red-950 font-bold hover:uppercase"
        href={`/sales/products/${props.id}`}
      >
        Ver productos
      </Link>
    </div>
  );
}

export default Sale;
