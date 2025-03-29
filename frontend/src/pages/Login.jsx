// src/pages/Login.js
import React from 'react';
import { Card } from 'react-bootstrap';
import LoginForm from '../components/Auth/LoginForm';

const Login = () => {
  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <Card style={{ width: '400px', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 className="mb-4 text-center">Login</h2>
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;
