import React from 'react';
import { connect } from 'react-redux';
import { Routes } from './Routes';

import { Container } from './Appstyle';

import { Template } from './components/MainComponents';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';

const Page = (props) => {
  return (
    <Container>
      <Template>
        <Header />

        <Routes />

        <Footer />
      </Template>
    </Container>
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
