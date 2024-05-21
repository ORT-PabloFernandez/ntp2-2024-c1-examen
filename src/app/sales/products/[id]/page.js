"use client"
import { useContext, useEffect, useState } from 'react'
import { SalesContext } from '../../../context/Context'
import Product from '../../../products/Product'
import Link from 'next/link';

export default function pageProductsDetails({ params }) {
    const salesContext = useContext(SalesContext);
    const [sales, setSales] = useState([]);
    const [product, setProduct] = useState([]);
    const { id } = params

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

                if (sale && sale.items) {
                    setProduct(sale.items);
                } else {
                    setProduct([]);
                }
            } catch (error) {
                console.error(error);
            }
        };

        findSale();
    }, [id, sales]);

    console.log(product)


    return (
        <section>
            <div className="grid grid-cols-3 gap-4 place-content-center">
                {product &&
                    product.map((item, index) => (
                        <Product
                            key={index}
                            name={item.name}
                            quantity={item.quantity}
                            price={parseFloat(item.price.$numberDecimal)}
                        />
                    ))
                }

            </div>
            <Link className='p-3 m-3 uppercase hover:text-yellow-500' href="/">Volver</Link>
        </section>
    )
}
