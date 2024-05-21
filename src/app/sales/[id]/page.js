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
        <div className="flex flex-col justify-center items-center bg-slate-400 min-h-screen">
            {customer ? (
                <div>
                    <h1 className='p-3 text-center uppercase'>cliente</h1>
                    <Customer
                        email={customer.email}
                        age={customer.age}
                        satisfaction={customer.satisfaction}
                        gender={customer.gender}
                    />
                </div>
            ) : (
                <div>No customer found</div>
            )}
            <Link className='p-3 uppercase hover:text-yellow-500' href="/">Volver</Link>
        </div>
    );
}