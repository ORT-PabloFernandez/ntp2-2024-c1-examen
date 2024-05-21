'use client'
import { useEffect,useState } from "react";
import { Customer } from "../Customer";
import { Item } from "../Item";

export default function CustomerDetails({params}) {
  const {id} = params;
  const [sales, setSales] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(sales);

  useEffect(()=>{
      fetch('https://salesbackend.azurewebsites.net/api/sales')
      .then(response =>response.json())
      .then((data)=> {
        const sale = data.find(sale => sale["_id"] === id);
        setSales(sale);
        setLoading(false);
      })
      .catch(error =>console.log("ESTE ES UN ERROR: "+error));
  }, [] );

  //
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!sales) {
    return <div>Error loading sales data</div>;
  }
  
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <Customer customer={sales.customer}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sales.items && sales.items.map((item, index) => (
          <Item item={item} index ={index}/>
        ))}
      </div>
    </div>
  );
}