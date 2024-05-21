import Sale from "./Sale";

export default function SalesList(props) {
  return (
  <ul>
  {props.Sales.map((sale) => {
    return (
      <Sale
        _Id={sale["_id"]}
        SaleDate={sale.saleDate}
        StoreLocation ={sale.storeLocation}
        PurchaseMethod={sale.purchaseMethod}
        Items = {sale.items}
      />
    );
  })}
</ul>
  );
}