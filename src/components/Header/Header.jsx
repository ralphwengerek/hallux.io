import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import px from '../../utils/sizeMixin';
import media from '../../utils/mediaQuery';
import Button from '../Button/Button';
import * as userActions from '../../redux/actions/user';

const StyledHeader = styled.header`
  box-shadow: 0 0 5px #cccccc;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-out;
  width: 100%;
  z-index: 9000000;
`;

const NavBarContainer = styled.div`
  align-items: center;
  display:flex;
  justify-content: space-between;
  margin: 0 ${px(8)};
  min-height: 40px;
  color: #fff;

  ${media.up.tablet`
    margin: 0 ${px(32)};
    min-height: 60px;
  `}
`;

const Company = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled(Link)`
  margin-left: ${px(8)};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: ${px(24)};

  ${media.up.tablet`
    font-size: ${px(32)};
  `}
`;

const Navigation = styled.nav``;

const NavButton = styled(NavLink)`
  margin: ${px(16)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Header = ({ isAuthenticated, logout, login }) => (
  <StyledHeader>
    <NavBarContainer>
      <Company>
        <Title to="/">Hallux.io</Title>
      </Company>
      <Navigation>
        <NavButton to="/" exact activeClassName="active">Home</NavButton>
        <NavButton to="/blog" activeClassName="active">Blog</NavButton>
        <NavButton to="/about" activeClassName="active">About</NavButton>
        { isAuthenticated
          ? <Button onClick={() => logout()}>Sign out</Button>
          : <Button onClick={() => login()}>Sign in</Button>
        }
      </Navigation>
    </NavBarContainer>
  </StyledHeader>
);

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  isAuthenticated: user.isAuthenticated,
});

const mapDispatchToProps = ({
  login: userActions.login,
  logout: userActions.logout,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
