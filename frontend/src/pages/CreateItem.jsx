import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Form, Button, Alert } from 'react-bootstrap';

const CreateItem = () => {
  const { token } = useAuth();
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // POST /api/items/ with the user's token
      await axios.post(
        '/api/items/',
        { name, text },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );
      setSuccess('Item created successfully!');
      setName('');
      setText('');
    } catch (err) {
      console.error(err);
      setError('Failed to create item.');
    }
  };

  return (
    <div className="form-container">
      <h2 className="mb-4">Create Item</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name..."
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What is this item about?"
          />
        </Form.Group>

        <Button variant="primary" type="submit">Create</Button>
      </Form>
    </div>
  );
};

export default CreateItem;

