import Link from "next/link";

export default function Item(props) {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
        <h3>{props.quantity}</h3>
      </div>
    </li>
  );
}
