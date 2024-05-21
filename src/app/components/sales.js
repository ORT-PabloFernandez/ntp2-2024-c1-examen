'use client'
import Link from "next/link";

export default function SaleComponent(props) {
    const clientUrl = `/sales/${props.sale._id}/customer`;
    const itemsUrl = `/sales/${props.sale._id}/item`;

    return (
        <div style={{color:"black",marginTop:"15px",padding:'5px',maxWidth:'50vw',margin:'auto',border:"3px solid black",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div><span>Sales Date:</span>{props.sale.saleDate}</div>
            <div><span>Store Location:</span>{props.sale.storeLocation}</div>
            <div><span>Purchase Method:</span>{props.sale.purchaseMethod}</div>
            <div><span><Link href={clientUrl}>Detalle cliente</Link></span></div>
            <div><span><Link href={itemsUrl}>Detalle items</Link></span></div>
        </div>
    )
}