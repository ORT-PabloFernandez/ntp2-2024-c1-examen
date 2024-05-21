
export default function CustomerList(props) {
  const findCustomerById = (id) => {
    return props.Ventas.find((venta) => venta["_id"] === id)?.customer;
  };

  return (
    <ul>
      {props.Ventas.map((venta) => {
        const customer = findCustomerById(venta["_id"]);
        return (
          <Customer
            key={venta["_id"]}
            genero={customer.gender}
            edad={customer.age}
            email={customer.email}
            satisfaccion={customer.satisfaction}
          />
        );
      })}
    </ul>
  );
}

