import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogged } from '../helpers/AuthHandler';

export const RouteHandler = ({ children, ...rest }) => {
	let islogged = true;
	let authorized = rest.private && !islogged ? false : true;

	if (!authorized) {
		return <Navigate to="/signin" />;
	} else {
		return children;
	}
};
