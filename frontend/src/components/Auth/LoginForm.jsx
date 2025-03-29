// src/components/Auth/LoginForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Form, Button, Alert, InputGroup } from 'react-bootstrap';
// Optional: icons from react-icons
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      
      {/* Email Field */}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <FaUser />
          </InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
      </Form.Group>

      {/* Password Field */}
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <InputGroup.Text>
            <FaLock />
          </InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
      </Form.Group>

      {/* Submit Button */}
      <Button variant="primary" type="submit" className="w-100">
        Login
      </Button>

      {/* Optional: Link to Register */}
      <div className="mt-3 text-center">
        Don’t have an account? <Link to="/register">Register</Link>
      </div>
    </Form>
  );
};

export default LoginForm;
