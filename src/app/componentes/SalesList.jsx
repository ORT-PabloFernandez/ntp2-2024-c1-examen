import Link from "next/link";

export default function SalesList({ sales }) {
  return (
    <ul className="space-y-4">
    {sales.map((sale) => (
      <li key={sale._id} className="p-4 border rounded-lg shadow-md bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{new Date(sale.saleDate).toLocaleDateString()}</h2>
            <p className="text-gray-600">{sale.storeLocation}</p>
            <p className="text-gray-600">{sale.purchaseMethod}</p>
          </div>
          <Link href={`/sales/${sale._id}`}>
            <a className="text-blue-500 hover:underline">Details</a>
          </Link>
        </div>
      </li>
    ))}
  </ul>
  );
}