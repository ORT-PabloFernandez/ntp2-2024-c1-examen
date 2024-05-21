
export default function ItemList(props) {
  const findItemById = (id) => {
    return props.Ventas.find((venta) => venta["_id"] === id)?.item;
  };

  return (
    <ul>
      {props.Ventas.map((venta) => {
        const customer = findItemById(venta["_id"]);
        return (
          <Customer
            key={venta["_id"]}
            genero={item.name}
            precio={item.price}
            cantidad={item.quantity}
          />
        );
      })}
    </ul>
  );
}

