import React from 'react';
import Producto from './Producto';

const ProductosLista = (props) => {
    return (
        <ul>
          {props.Productos.map((producto) => {
            return(
                <Producto 
                  key={producto.name}
                  nombre={producto.name}
                  precio={producto.price["$numberDecimal"]}
                  cantidad={producto.quantity}
                />
            )
          })}  
        </ul>
    );
}

export default ProductosLista;
