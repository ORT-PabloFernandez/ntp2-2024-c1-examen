export default function Product(props) {
  return (
    <li>
      <div>
        <h5>Nombre: {props.Nombre}</h5>
        <h5>Precio: {props.Precio}</h5>
        <h5>Cantidad: {props.Cantidad}</h5>
      </div>
    </li>
  );
}
