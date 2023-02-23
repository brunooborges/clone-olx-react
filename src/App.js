import React from 'react';
import { connect } from 'react-redux';
import { Routes } from './Routes';

import './App.css';

import { Template } from './components/MainComponents';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';

const Page = (props) => {
	return (
		<>
			<Template>
				<Header />

				<Routes />

				<Footer />
			</Template>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
