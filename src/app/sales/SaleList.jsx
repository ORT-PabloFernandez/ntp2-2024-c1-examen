import "./sales.css";
import Sale from "./Sale";

export default function SaleList(props) {
  return (
    <ul className="sales-list">
      {props.Sales.map((sale,index) => {
        return (
          <Sale
            key={index}
            Id={sale["_id"]}
            Date={sale.saleDate}
            Location={sale.storeLocation}
            Purchased={sale.purchaseMethod}
          />
        );
      })}
    </ul>
  );
}
