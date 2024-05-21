import "./venta.css";
import Link from "next/link";

export default function Venta(props) {
  return (
    <li className="movie-item">
      <div className="card ">
        <div className="movie-item__info avatar">
          <h2>{props.SaleDate || "No disponible"}</h2>
          <p>{props.StoreLocation || "No disponible"} </p>
          <p>{props.PurchaseMethod || "No disponible"} </p>
        </div>
        <div>
          <Link href={`/Cliente/${props.Id}`}>Cliente</Link>
        </div>
      </div>
    </li>
  );
}
