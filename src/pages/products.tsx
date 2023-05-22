import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Product } from './models/product';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/product/all')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(`Error: ${error}`));
  }, []);

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
            <tr key={product.id}>
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
    </>
  );
}

export default ProductsPage;
