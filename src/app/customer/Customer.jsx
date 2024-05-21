import React from "react";

export default function Customer(props) {
  return (
    <div className="border p-3">
      <h1>Email: {props.email}</h1>
      <p>Age: {props.age}</p>
      <p>Satisfaction: {props.satisfaction}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
}
