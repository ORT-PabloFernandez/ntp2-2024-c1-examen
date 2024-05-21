import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>BIENVENIDOS A LA LISTA DE VENTAS</h1>
      <Link href="/sales">
        <button style={{ fontSize: "1.2rem", color: "#B99E91", backgroundColor: "transparent", border: "none", cursor: "pointer" }}>Ver ventas</button>
      </Link>
    </div>
  );
}
