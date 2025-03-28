import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Layout/Navbar';

const App = () => {
  const { user } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
