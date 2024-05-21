"use client";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";


export default function VentaPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <ItemList Items={items} />
    </>
  );
}