import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
//Una vez que el usuario esta logeado se protege su cuenta y redirige a Home para que navegue sin problema

const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth()

  if (!user) {
    return <Navigate to='/' />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
