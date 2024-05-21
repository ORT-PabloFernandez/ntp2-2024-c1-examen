import Venta from "./Venta";

export default function UserList(props) {
  return (
    <ul className="users-list">
      {props.Ventas.map((venta) => {
        return (
          <Venta
            Id={venta._id}
            SaleDate={venta.saleDate}
            StoreLocation={venta.storeLocation}
            PurchaseMethod={venta.purchaseMethod}
          />
        );
      })}
    </ul>
  );
}