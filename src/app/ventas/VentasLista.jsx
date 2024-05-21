import React from 'react';
import Venta from './Venta';

const VentasLista = (props) => {
    return (
        <ul>
          {props.Ventas.map((venta) => {
            return(
                <Venta
                  key={venta._id}
                  id={venta._id}
                  saleDate={venta.saleDate}
                  storeLocation={venta.storeLocation}
                  purchaseMethod={venta.purchaseMethod}
                />
            )
          })}  
        </ul>
    );
}

export default VentasLista;
