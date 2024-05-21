import Link from "next/link";

export default function User(props) {
  return (
    <li className="user-item">
      <div className="card user-item__content">
          <div className="user-item__info">
            <h2>{props.SaleDate}</h2>
            <h2>{props.StoreLocation}</h2>
            <h2>{props.PurchaseMethod}</h2>
          </div> 
         <Link href={`/ventas/cliente/${props.Id}`}>
            <h2>Cliente</h2>
        </Link>
        <Link href={`/ventas/productos/${props.Id}`}>
            <h2>Productos</h2>
        </Link>
      </div>
    </li>
  );
}
