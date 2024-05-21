import Link from "next/link";

export default function User(props) {
    console.log("ventas",props.Items)
  return (
    <li>
      <div>
        <h1>Venta de ID {props._Id}</h1>
      </div>
      <div>
        <Link href={`/customer/${props._Id}`}>Cliente</Link>
        <h2>Sale Date: {props.SaleDate.split("T")[0]}</h2>
        <h2>Time of the sale: {props.SaleDate.split("T")[1].split(".")[0]}</h2>
        <h2>Store Location: {props.StoreLocation}</h2>
        <h2>Payment Method: {props.PurchaseMethod}</h2>
        <ul>
      {props.Items.map((item) => {
        return (
        <li>
        <h1>Product: {item.name}</h1>
        <Link href={`/products/id${props._Id}&name=${item.name}`}>Detalles</Link>
        </li>
        );
      }
    )}
    </ul>
      </div>
    </li>
  );
}
