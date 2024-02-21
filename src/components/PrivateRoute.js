import React from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from './auth';

const PrivateRoute = ({ children, ...rest }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
