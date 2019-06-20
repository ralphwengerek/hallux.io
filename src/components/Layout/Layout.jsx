import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import {
  About, Blog, Home, NotFound,
} from '../../pages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Callback from '../Auth/Callback';
import ProfilePanel from '../ProfilePanel/ProfilePanel';


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
        <ProfilePanel />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/callback" component={Callback} />
          <Route component={NotFound} />
        </Switch>
      </Content>
      <Footer />
    </Site>
  </>
);

export default Layout;
