import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, isAdmin } from './auth';

const AdminRoute = ({ children }) => {
  return isAuthenticated() && isAdmin() ? children : <Navigate to="/login" replace />;
};

export default AdminRoute;
