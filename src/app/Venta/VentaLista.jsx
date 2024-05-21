import "./venta.css";
import Venta from "./Venta";

export default function VentaLista(props) {
  return (
    <ul className="movies-list">
      {props.Ventas.map((venta) => {
        return (
          <Venta
            Id={venta["_id"]}
            SaleDate={venta["saleDate"]}
            StoreLocation={venta["storeLocation"]}
            PurchaseMethod={venta["purchaseMethod"]}
          />
        );
      })}
    </ul>
  );
}
