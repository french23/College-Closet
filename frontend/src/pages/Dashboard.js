import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Dashboard;
