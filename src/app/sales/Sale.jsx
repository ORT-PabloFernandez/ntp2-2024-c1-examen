import Link from "next/link";

export default function Sale(props) {
  return (
    <div className="flex flex-col items-center">
      <li className="flex flex-col overflow-hidden rounded shadow-lg m-4 w-full max-w-md">
        <div className="px-6 py-4">
          <Link href={`sales/${props._id}/customer/`}>
            <div className="font-bold text-xl mb-2">Customer</div>
          </Link>
          <Link href={`sales/${props._id}/items/`}>
            
            <div className="font-bold text-xl mb-2">Items</div>
          </Link>
          <p className="text-gray-700 text-base">Sale Date: {props.saleDate}</p>
          <p className="text-gray-700 text-base">Store Location: {props.storeLocation}</p>
          <p className="text-gray-700 text-base">Purchase Method: {props.purchaseMethod}</p>
        </div>
      </li>
    </div>
  );
}