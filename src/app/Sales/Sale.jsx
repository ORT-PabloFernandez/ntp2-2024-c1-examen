import Link from "next/link";

export default function Sale(props) {
  return (
    <li>
      <div>
        <h4>Fecha: {props.Fecha}</h4>
        <h4>Ubicación: {props.Ubicacion}</h4>
        <h4>Metodo de Pago: {props.Metodo}</h4>
      </div>
      <div>
        <Link href={`/Products/${props.Id}`}>
          <h5>Ver Productos</h5>
        </Link>
      </div>
      <div>
        <Link href={`/Customers/${props.Id}`}>
          <h5>Ver Cliente</h5>
        </Link>
      </div>
    </li>
  );
}
