export default function Producto(props){

    return(
        <>
            <h3>{props.name}</h3>
            <h3>{props.price.$numberDecimal}</h3>
            <h3>{props.quantity}</h3>
        </>
    );
}