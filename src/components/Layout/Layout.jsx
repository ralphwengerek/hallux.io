import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  About, Blog, Home, NotFound,
} from '../../pages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Callback from '../Auth/Callback';
import ProfilePanel from '../ProfilePanel/ProfilePanel';
import { media } from '../../utils/mediaQuery';
import { getUserIsAuthenticated } from '../../redux/reducers/user';

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  padding-top: 30px;
  flex: 1;
  display: flex;
  justify-content: center;

  ${media.up.tablet`
    padding-top: 40px;
  `}

`;

const Content = styled.div`
  position:relative;
  width: 100%;
  ${media.up.desktop`
    width: ${({ theme }) => theme.sizing.desktop};
  `}
  /* background-color: lightblue; */
`;

const Layout = () => {
  const loggedIn = useSelector(getUserIsAuthenticated);
  return (
    <>
      <GlobalStyle />
      <Site>
        <Header />
        <ContentContainer>
          <Content>
            { loggedIn && <ProfilePanel /> }
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/callback" component={Callback} />
              <Route component={NotFound} />
            </Switch>
          </Content>
        </ContentContainer>
        <Footer />
      </Site>
    </>
  );
};

export default Layout;
