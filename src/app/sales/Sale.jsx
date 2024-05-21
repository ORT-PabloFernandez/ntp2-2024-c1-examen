import Link from "next/link";

export default function Sale(props) {
  return (
    <li className="sale-item">
      <Link href={`/sales/${props.Id}`}>
        <div>
          <h2 className="sale-date">Fecha de compra: {props.SaleDate}</h2>
          <h2 className="store-location">Ciudad de tienda: {props.StoreLocation}</h2>
          <h2 className="purchase-method">Metodo de pago: {props.PurchaseMethod}</h2>
        </div>
      </Link>
    </li>
  );
}
