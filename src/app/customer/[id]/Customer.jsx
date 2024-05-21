import React from "react";

export default function Customer({ customer }) {
  if (!customer) return <div>Loading...</div>;

  return (
    <div>
      <h1>Customer Details</h1>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Gender:</strong> {customer.gender}</p>
      <p><strong>Age:</strong> {customer.age}</p>
      <p><strong>Satisfaction:</strong> {customer.satisfaction}</p>
    </div>
  );
}