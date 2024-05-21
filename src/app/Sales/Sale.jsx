import Link from "next/link";

export default function Sale(data) {
    return(
        <div>
            <p>Date: {data.saleDate}</p>
            <p>Location: {data.storeLocation}</p>
            <p>Purchase method: {data.purchaseMethod}</p>
            <Link href={`http://localhost:3000/customer/${data.id}`}>View Customer</Link>
            
        </div>
    );
}