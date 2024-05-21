import Venta from "./Venta";
export default function VentasList(props){
    return (
        <div className="grid grid-cols-4 gap-4">
            {props.ventas.map((venta, index) =>{
                return(
                    <Venta 
                        key={index}
                        id={venta["_id"]}
                        saleDate={venta.saleDate}
                        storeLocation={venta.storeLocation}
                        purchaseMethod={venta.purchaseMethod}
                        customer={venta.customer}
                        items={venta.items}
                    />
                );
            })}
        </div>
    );
}