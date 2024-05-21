import React from 'react';
import Sales from './Sales';

export default function SaleList(props) {
  return (
    <ul className="customer-list">
      {props.Sales.map(sale => (
        <Sales
          key={sale._id}
          SaleId={sale._id}
          Date={sale.saleDate}
          Location={sale.storeLocation}
          Method={sale.purchaseMethod}
          Customer={sale.customer}
        />
      ))}
    </ul>
  );
}

