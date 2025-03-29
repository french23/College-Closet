// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // GET /api/items/ (public endpoint in your code)
        const response = await axios.get('/api/items/');
        setItems(response.data); // an array of items
      } catch (err) {
        console.error('Failed to fetch items', err);
        setError('Could not load items.');
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>

      <hr />

      <div className="d-flex justify-content-between align-items-center">
        <h3>All Items</h3>
        {/* Link to create a new item (only visible if user is logged in) */}
        {user && (
          <Link to="/create-item" className="btn btn-primary">
            Create New Item
          </Link>
        )}
      </div>

      {error && <p className="text-danger">{error}</p>}

      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul className="list-group mt-3">
          {items.map((item) => (
            <li key={item.itemid} className="list-group-item">
              <h5>{item.name}</h5>
              <p>{item.text}</p>
              <p className="text-muted">Item ID: {item.itemid} | User ID: {item.userid}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
