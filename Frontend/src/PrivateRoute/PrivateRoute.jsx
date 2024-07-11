// PrivateRoute.js
 
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
 
const PrivateRoute = ({ element, ...rest }) => {
    const { isAdmin } = useContext(AuthContext);
 
    return isAdmin ? <Route {...rest} element={element} /> : <Navigate to="/" />;
};
 
export default PrivateRoute;