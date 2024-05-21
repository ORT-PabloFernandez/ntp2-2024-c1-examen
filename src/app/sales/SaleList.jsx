import React from "react";
import Sale from "./Sale";

function SaleList(props) {
  return (
    <div className="grid grid-cols-3 place-items-center ">
      {props.Sales &&
        props.Sales.map(sale => (
          <Sale
            key={sale._id}
            id={sale._id}
            saleDate={sale.saleDate}
            storeLocation={sale.storeLocation}
            purchaseMethod={sale.purchaseMethod}
          />
        ))}
    </div>
  );
}

export default SaleList;
