'use client'
import Link from "next/link";

export default function Sales(props) {
    const sale = props.sale;
    
    return (
        <Link 
  className="flex justify-center items-center hover:underline" 
  href={`http://localhost:3000/customer/${sale["_id"]}`}
>
  <article className="my-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
    <p className="text-white text-lg font-semibold mb-2">
      Store location: <span className="font-normal">{sale.storeLocation}</span>
    </p>
    <p className="text-white text-lg font-semibold mb-2">
      Purchase method: <span className="font-normal">{sale.purchaseMethod}</span>
    </p>
    <p className="text-white text-lg font-semibold">
      Sale date: <span className="font-normal">{sale.saleDate.slice(0,10)}</span>
    </p>
  </article>
</Link>
    );
}
    