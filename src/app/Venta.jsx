import Link from "next/link";

export default function Venta(props) {
  return (
    <div>
      <h1 className="text-sm font-light">Date: {props.saleDate}</h1>
      <h3 className="font-medium">Location: {props.storeLocation}</h3>
      <p className="font-bold">Method: {props.purchaseMethod}</p>
      <Link href={`/customer/${props._id}`}>ver cliente</Link>
      <br></br>
      <Link href={`/detail/${props._id}`}>ver detalle</Link>
    </div>
  );
}
