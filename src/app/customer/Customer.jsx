import React from "react";

export default function Customer(props) {
  return (
    <div className="border p-3">
      <h1>Email: {props.email}</h1>
      <p>Edad: {props.age}</p>
      <p>Satisfacción: {props.satisfaction}</p>
      <p>Género: {props.gender}</p>
    </div>
  );
}
