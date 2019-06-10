import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { About, Blog, Home } from '../../pages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import GlobalStyle from '../GlobalStyle/GlobalStyle';

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  padding-top: 60px;
  flex: 1;
`;

const Layout = () => (
  <>
    <GlobalStyle />
    <Site>
      <Header />
      <Content>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </Content>
      <Footer />
    </Site>
  </>
);

export default Layout;
