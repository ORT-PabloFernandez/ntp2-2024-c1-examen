import React from 'react';
import "./sales.css";
import Link from "next/link";

export default function Sale(props) {
  return (
    <li className="sale-item">
      <div className="card sale-item__content">
          <div>
            <div className="titleStandar">
              <ul>
                <li><strong>Date:</strong> {props.Date}</li>
                <li><strong>Location:</strong> {props.Location}</li>
                <li><strong>Purchased:</strong> {props.Purchased}</li>
                <Link href={`/customer/${props.Id}`}><button>Customer</button></Link>
                <Link href={`/items/${props.Id}`}><button>Item</button></Link>
              </ul>
            </div>
          </div>
      </div>
    </li>
  );
}