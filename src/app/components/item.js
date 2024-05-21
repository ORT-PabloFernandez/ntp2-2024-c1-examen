export default function ItemComponent(props) {
    return (
        <div style={{color:"black",marginTop:"15px",padding:'5px',maxWidth:'50vw',margin:'auto',border:"3px solid black",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1>{(props.item.name).toUpperCase()}</h1>
            <div><span>Price:</span>{props.item.price["$numberDecimal"]}</div>
            <div><span>Quantity:</span>{props.item.quantity}</div>
        </div>
    )
}