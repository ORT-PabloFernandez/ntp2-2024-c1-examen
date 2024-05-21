import Sale from "./Sale";
export default function SalesList(props) {
  return (
    <ul className="sales-list">
      {props.Sales.map((sale) => {
        return (
          <Sale
            _id={sale["_id"]}
            saleDate={sale["saleDate"]}
            saleLocation={sale["saleLocation"]}
            purchaseMethod={sale["purchaseMethod"]}
            customer={sale["customer"]}
            items={sale["items"]}
          />
        );
      })}
    </ul>
  );
}
