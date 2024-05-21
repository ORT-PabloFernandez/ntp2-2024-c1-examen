import { useEffect, useState } from 'react';
import ProductDetails from '@/components/ProductDetails';

const ProductDetailsPage = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://salesbackend.azurewebsites.net/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  return (
    <div>
      <h1>Detalles del Producto</h1>
      {product && <ProductDetails product={product} />}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  return {
    props: {
      productId: id,
    },
  };
}

export default ProductDetailsPage;