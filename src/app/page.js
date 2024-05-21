import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1 class="h2">Ingresar a las 100 ventas</h1>
          <Link href={"/sales"}>
            <button class="btn btn-primary">Revisar ventas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
