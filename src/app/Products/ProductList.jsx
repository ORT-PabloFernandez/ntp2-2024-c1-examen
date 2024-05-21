import Product from "./Product";

export default function ProductList(props) {
  return (
    <ul>
      {props.Products.map((product) => {
        return (
          <Product
            Nombre={product.name}
            Precio={product.price}
            Cantidad={product.quantity}
          />
        );
      })}
    </ul>
  );
}
