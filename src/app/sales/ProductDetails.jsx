export default function ProductDetails({ Products }) {
  if (!Products) {
    return <div>Cargando datos de los productos...</div>;
  }

  return (
    <div className="purchase-details">
      <h1>Productos de la compra:</h1>
      <ul className="product-list">
        {Products.map((product) => (
          <div>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">
              Precio: ${product.price.$numberDecimal}
            </p>
            <p className="product-quantity">Cantidad: {product.quantity}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
