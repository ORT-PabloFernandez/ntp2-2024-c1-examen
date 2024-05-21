import Sale from "./Sale";

export default function SalesList(props) {
  return (
    <ul>
      {props.Sales.map((sale) => {
        return (
          <Sale
            Id={sale["_id"]}
            Fecha={sale.saleDate}
            Ubicacion={sale.storeLocation}
            Metodo={sale.purchaseMethod}
          />
        );
      })}
    </ul>
  );
}
