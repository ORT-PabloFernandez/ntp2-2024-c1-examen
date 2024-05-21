'use client'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import ItemComponent from '../../../components/item'
import { useRouter } from 'next/navigation'


export default function CustomerDetail() {
    const params = useParams()    
    const saleId = params["id"]

    const [itemsData, setItemsData] = useState([]);
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
                const itemData = saleData.items
                setItemsData(itemData);
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
            {itemsData && itemsData.map((item)=>{
                return <ItemComponent item={item} />
            })}
        </div>
    );
}