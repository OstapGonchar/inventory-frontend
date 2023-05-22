import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Product } from '../models/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [updatedProduct, setUpdatedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleSave = () => {
    // Logic to update the product details using API endpoint
    axios.post('http://localhost:8080/api/product/' + product!!.id, updatedProduct)
    .then(response =>  {
        console.log(response.data);
        onClose();
    })
    .catch(error => console.error(`Error: ${error}`));
  };

  return (
    <Modal show={product !== null} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" defaultValue={product?.name} onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value} as Product)} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" defaultValue={product?.description} onChange={(e) => setUpdatedProduct({...updatedProduct, description: e.target.value} as Product)} />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" defaultValue={product?.price} onChange={(e) => setUpdatedProduct({...updatedProduct, price: parseFloat(e.target.value)} as Product)} />
          </Form.Group>
          <Form.Group controlId="currency">
            <Form.Label>Currency</Form.Label>
            <Form.Control type="text" defaultValue={product?.currency} onChange={(e) => setUpdatedProduct({...updatedProduct, currency: e.target.value} as Product)} />
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" defaultValue={product?.quantity} onChange={(e) => setUpdatedProduct({...updatedProduct, quantity: parseInt(e.target.value)} as Product)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
