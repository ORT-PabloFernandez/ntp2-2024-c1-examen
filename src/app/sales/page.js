"use client"
import SaleList from './SaleList';
import { useContext } from 'react';
import { SalesContext } from '../context/Context';

export default function pageSales() {
    const sales = useContext(SalesContext);

    console.log(sales);

    return (
        <SaleList Sales={sales} />
    )
}
