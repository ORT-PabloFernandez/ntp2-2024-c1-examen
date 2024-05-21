import Venta from "./venta"

export default function VentasList(props){
    

    return(
        <>
            <ul>
                {props.Ventas.map((user)=>{
                    return(
                        <Venta
                            Key={user._id}
                            Date={user.saleDate}
                            Location={user.storeLocation}
                            MetodoPurchase={user.purchaseMethod}
                        />
                    );
                })}
            </ul>
        </>
    );
}