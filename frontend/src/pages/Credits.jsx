// src/pages/Credits.js
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Credits = () => {
  return (
    <div className="container my-5">
      <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <Card.Title className="mb-4 text-center">Credits</Card.Title>
          <Card.Text className="mb-3">
            Group Ten Team Members:
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Peter Stewart</ListGroup.Item>
            <ListGroup.Item>Si Qin Huang</ListGroup.Item>
            <ListGroup.Item>Kendall Petteway</ListGroup.Item>
            <ListGroup.Item>Chance Palmer</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Credits;
