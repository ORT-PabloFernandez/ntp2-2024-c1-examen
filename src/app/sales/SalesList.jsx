import Sale from "./Sale.jsx";

export default function SalesList(props) {
  console.log("propiedades: ", props.Sales);
  return (
    <ul className="sales-list">
      {props.Sales.map((sale) => {
        return (
          <Sale
            Id={sale._id}
            SaleDate={sale.saleDate}
            StoreLocation={sale.storeLocation}
            PurchaseMethod={sale.purchaseMethod}
          />
        );
      })}
    </ul>
  );
}
