export default function ProductDetails({ products }) {
    return (
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">Price: ${product.price.$numberDecimal}</p>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
              </div>
              <img src="/images/product-placeholder.png" alt={product.name} className="w-16 h-16" />
            </div>
          </li>
        ))}
      </ul>
    );
  }