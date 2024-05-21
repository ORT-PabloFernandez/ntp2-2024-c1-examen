import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Customer from "./[id]/Customer";

export default function CustomerDetail() {
    const { id } = useParams();
    const [customer, setCustomer] = useState({});
    useEffect(() => {
        fetch(`https://salesbackend.azurewebsites.net/api/sales`)
        .then(data => data.json())
        .then(data => data.find({_id: id}))
        .then(sale => setCustomer(sale.customer))
        .catch(err => console.error(err));
    })
    return(
        <Customer
        customer={customer}
        />
    );
}