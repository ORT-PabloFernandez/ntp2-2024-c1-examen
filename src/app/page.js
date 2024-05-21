import "./Venta/venta.css";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/Venta" className="movies-list center">
      <button className="pagination-button">Ver Ventas</button>
    </Link>
  );
}
