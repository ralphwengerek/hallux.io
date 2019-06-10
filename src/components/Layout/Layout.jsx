import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { About, Blog, Home } from '../../pages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Container = styled.div`
`;

const Content = styled.div`
  padding-top: 60px;
`;

const Layout = () => (
  <Container>
    <Header />
    <Content>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
    </Content>
    <Footer />
  </Container>
);

export default Layout;
