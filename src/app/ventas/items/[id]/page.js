"use client";

import ItemList from "./ItemList";

import { useEffect, useState } from "react";

export default function CustomerPage({ params }){
    const { id } = params;
    const [items, setItems] = useState([]);
    const url = "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const venta = data.find((venta) => venta["_id"] === id);
        setItems(venta.items);
      })
      .catch((error) => console.log(error));
  }, []);


    return (
        <ItemList  items={items}/>
    );
}