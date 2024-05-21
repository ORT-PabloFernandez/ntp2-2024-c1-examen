import Link from "next/link";

export default function Customer(props) {
  return (
    <li>
      <div>
        <h3>{props.genero}</h3>
        <h3>{props.edad}</h3>
        <h3>{props.email}</h3>
        <h3>{props.satisfaccion}</h3>
      </div>
    </li>
  );
}
