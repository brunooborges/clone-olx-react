import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogged } from '../helpers/AuthHandler';

export const RouteHandler = ({ children, ...rest }) => {
  let authorized = rest.private && !isLogged ? false : true;

  if (!authorized) {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
};
