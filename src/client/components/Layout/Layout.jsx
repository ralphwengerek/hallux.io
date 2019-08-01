import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import {
  AboutPage, ContactPage, ListPostsPage, NotFoundPage, EditPostPage, ViewPostPage,
} from '../../pages';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';
import { Callback } from '../Auth/Callback';
import { ProfilePanel } from '../ProfilePanel/ProfilePanel';
import { media } from '../../utils/mediaQuery';
import { getUserIsAuthenticated } from '../../redux/reducers/user';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Site = styled.div`
  ${({ theme }) => css`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: ${theme.colors.background};
  `}

`;

const ContentContainer = styled.div`
  padding-top: 50px;
  flex: 1;
  display: flex;
  justify-content: center;

  ${media.up.tablet`
    padding-top: 60px;
  `}

`;

const Content = styled.div`
  position:relative;
  width: 100%;

  ${media.up.hires`
    width: 1080px;
  `}
`;

export const Layout = () => {
  const loggedIn = useSelector(getUserIsAuthenticated);
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Site>
        <Header />
        <ContentContainer>
          <Content>
            { loggedIn && <ProfilePanel /> }
            <Switch>
              <Route path={['/tag/:tag', '/']} exact component={ListPostsPage} />
              <Route path="/about" component={AboutPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route path="/blog/:slug/edit" component={EditPostPage} />
              <Route exact path="/blog/:slug" component={ViewPostPage} />
              <Route path="/callback" component={Callback} />
              <Route component={NotFoundPage} />
            </Switch>
          </Content>
        </ContentContainer>
        <Footer />
      </Site>
    </>
  );
};

export default Layout;
