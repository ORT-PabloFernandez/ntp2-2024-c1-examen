export default function Item(props) {
  return (
    <li className="sale-item">
      <div className="card sale-item__content">
        <div className="sale-item__info">
          <h2>{new Date(props.saleDate).toLocaleDateString()}</h2>
          <h2>{props.storeLocation}</h2>
          <h2>{props.purchaseMethod}</h2>
          <Link href={`/sales/customer/${props.customer.email}`}>
            <button className="btn btn-primary">Ver Comprador</button>
          </Link>
          <Link href={`/sales/items/${props.id}`}>
            <button className="btn btn-primary">Ver Productos</button>
          </Link>
        </div>
      </div>
    </li>
  );
}
