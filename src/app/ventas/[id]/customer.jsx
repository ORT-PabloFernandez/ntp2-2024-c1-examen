export default function Customer(props){

    let cliente = props.customer
    let detallesProd = props.itenms

    return(
        <>
            <h3>{cliente.gender}</h3>
            <h3>{cliente.age}</h3>
            <h3>{cliente.email}</h3>
            <h3>{cliente.satisfaction}</h3>
            <Link href={`http://localhost:3000/products`}>
                <h2>click para ver detalle de producto</h2>
                <Producto Detalle={detallesProd}/>
            </Link>
        </>
    );
}