import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        '/api/auth/login',
        `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );      
      
      localStorage.setItem('token', response.data.access_token);
      setToken(response.data.access_token);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.detail || 'Login failed' };
    }
  };

  const register = async (name, email, password) => {
    try {
      await axios.post('/api/auth/register', {
        name,
        email,
        password
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.detail || 'Registration failed' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });        
        setUser(response.data);
      } catch (error) {
        logout();
      }
    };

    if (token) fetchUser();
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
