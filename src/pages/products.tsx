import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Product } from './models/product';
import ProductModal from './components/product-modal';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = () => {
    axios.get('http://localhost:8080/api/product/all')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClose = () => {
    setSelectedProduct(null);
    fetchProducts(); // Refresh the products list
  }

  return (
    <>
      <h2>Products Page</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Currency</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} onClick={() => setSelectedProduct(product)}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.currency}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={handleClose} />}
    </>
  );
}

export default ProductsPage;