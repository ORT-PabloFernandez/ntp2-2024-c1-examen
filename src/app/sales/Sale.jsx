import Link from "next/link";
import { FaDollarSign } from 'react-icons/fa';

export default function Sale(props) {
  return (
    <div className="flex justify-center items-center s-screen">
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
      <div className="flex items-center mb-4">
        <FaDollarSign size={50} className="mr-2 text-blue-500" />
        <div>
          <p className="text-sm text-gray-600">Sale Details</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Link href={`sales/${props._id}/customer/`}>
            <div className="font-bold text-xl mb-2"><p className="text-gray-700 text-base">Customer</p></div>
          </Link>
        </div>
        <div>
        <Link href={`sales/${props._id}/items/`}>
            <div className="font-bold text-xl mb-2"><p className="text-gray-700 text-base">Items</p></div>
          </Link>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700">Sale Date: {props.saleDate}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700">Store Location: {props.storeLocation}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700">Purchase Method: {props.purchaseMethod}</p>
        </div>
      </div>
    </div>
    </div>


  );
}


