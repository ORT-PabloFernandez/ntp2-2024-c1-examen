export default function CustomerComponent(props) {
    return (
        <div style={{color:"black",marginTop:"15px",padding:'5px',maxWidth:'50vw',margin:'auto',border:"3px solid black",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1>Customer data</h1>
            <div><span>Gender:</span>{props.customer.gender}</div>
            <div><span>Age:</span>{props.customer.age}</div>
            <div><span>Email:</span>{props.customer.email}</div>
            <div><span>Satisfaction:</span>{props.customer.satisfaction}</div>
        </div>
    )
}