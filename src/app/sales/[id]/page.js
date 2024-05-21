"use client"
import { useContext, useEffect, useState } from 'react'
import { SalesContext } from '../../context/Context'
import Customer from '../../customer/Customer'
import Link from 'next/link';

export default function pageCustomerDetails({ params }) {
    const salesContext = useContext(SalesContext);
    const [sales, setSales] = useState([]);
    const [customer, setCustomer] = useState(null);
    const { id } = params;

    useEffect(() => {
        if (salesContext) {
            setSales(salesContext);
        }
    }, [salesContext]);

    useEffect(() => {
        const findSale = async () => {
            try {
                const sale = await sales.find(s => s._id === id);
                console.log("Find Sale:", sale);

                if (sale && sale.customer) {
                    setCustomer(sale.customer);
                } else {
                    setCustomer(null);
                }
            } catch (error) {
                console.error(error);
            }
        };

        findSale();
    }, [id, sales]);

    return (
        <div>
            {customer ? (
                <Customer
                    email={customer.email}
                    age={customer.age}
                    satisfaction={customer.satisfaction}
                    gender={customer.gender}
                />
            ) : (
                <div>No customer found</div>
            )}
            <Link href="/">Volver</Link>
        </div>
    );
}