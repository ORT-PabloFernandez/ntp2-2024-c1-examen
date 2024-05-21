
import Link from "next/link";

export default function Venta(props) {
  return (
    <li>
      <div>
      <Link href={`/ventas/${props.Id}`}>
          <div>
            <h3>{props.saleDate}</h3>
            <h3>{props.storeLocation}</h3>
            <h3>{props.purchaseMethod}</h3>
          </div>
        </Link>
      </div>
    </li>
  );

}