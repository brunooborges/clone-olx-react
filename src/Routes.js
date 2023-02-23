import React from 'react';
import { useRoutes } from 'react-router-dom';

import { RouteHandler } from './components/RouteHandler';

import About from './pages/About';
import AddAd from './pages/AddAd';
import AdPage from './pages/AdPage';
import Ads from './pages/Ads';
import EditAd from './pages/EditAd';
import EditUser from './pages/EditUser';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export const Routes = () => {
	return useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/about', element: <About /> },
		{ path: '/signin', element: <SignIn /> },
		{ path: '/signup', element: <SignUp /> },
		{ path: '/ad/:id', element: <AdPage /> },
		{
			path: '/post-an-ad',
			element: (
				<RouteHandler private>
					<AddAd />
				</RouteHandler>
			),
		},
		{ path: '/ads', element: <Ads /> },
		{
			path: '/my-account',
			element: (
				<RouteHandler private>
					<MyAccount />
				</RouteHandler>
			),
		},
		{
			path: '/my-account/edit-user',
			element: (
				<RouteHandler private>
					<EditUser />
				</RouteHandler>
			),
		},
		{
			path: '/my-account/edit-ad/:id',
			element: (
				<RouteHandler private>
					<EditAd />
				</RouteHandler>
			),
		},
		{ path: '*', element: <NotFound /> },
	]);
};
