'use client'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import CustomerComponent from '../../../components/customer'
import { useRouter } from 'next/navigation'


export default function CustomerDetail() {
    const params = useParams()    
    const saleId = params["id"]

    const [customerData, setCustomerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const router = useRouter();

    const goBack = () => {
        router.back();
    };


    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                const response = await fetch('https://salesbackend.azurewebsites.net/api/sales');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const saleData = data.find((sale)=>sale._id == saleId)
                const customerData = saleData["customer"]
                setCustomerData(customerData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCustomerData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <div className="volver" onClick={goBack}>Volver</div>
            {customerData && <CustomerComponent customer={customerData}/>}
        </div>
    );
}