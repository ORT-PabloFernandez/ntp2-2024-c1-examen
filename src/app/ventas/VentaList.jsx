
import Venta from "./Venta";

export default function VentaList(props) {
  return (
    <ul>
      {props.Ventas.map((venta) => {
        return (
          <Venta
            id={venta["_id"]}
            saleDate={venta.saleDate}
            storeLocation={venta.storeLocation}
            purchaseMethod={venta.purchaseMethod}
          />
        );
      })}
    </ul>
  );
}
