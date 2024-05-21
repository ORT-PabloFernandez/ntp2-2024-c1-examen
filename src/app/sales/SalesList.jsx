import React from "react";
import Sale from "./Sale";

export default function SalesList(props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {props.Sales.map((sale) => (
        <Sale
          Id={sale["_id"]}
          SaleDate={sale["saleDate"]}
          StoreLocation={sale["storeLocation"]}
          PurchaseMethod={sale["purchaseMethod"]}
          items={sale["items"]}
        />
      ))}
    </div>
  );
}

