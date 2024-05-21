import Link from "next/link";

export default function Sale(props) {
  return (
    <li className="sale-item">
      <div className="card sale-item__content">
        <div className="sale-item__info">
          <h2>{props.saleDate}</h2>
          <h2>{props.storeLocation}</h2>
          <h2>{props.purchaseMethod}</h2>
          <Link href={`/sales/${props._id}`}>
            <button className="btn btn-primary">Ver Comprador</button>
          </Link>
          <Link href={`/sales/${props.id}`}>
            <button className="btn btn-primary">Ver Productos</button>
          </Link>
        </div>
      </div>
    </li>
  );
}
