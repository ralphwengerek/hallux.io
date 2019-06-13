import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import px from '../../utils/sizeMixin';
import media from '../../utils/mediaQuery';
import AvatarProfile from '../AvatarProfile/AvatarProfile';
import Button from '../Button/Button';
import { login, logout } from '../../redux/actions/user';
import { getUser } from '../../redux/reducers/user';

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

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <StyledHeader>
      <NavBarContainer>
        <Company>
          <Title to="/">Hallux.io</Title>
        </Company>
        <Navigation>
          <NavButton to="/" exact activeClassName="active">Home</NavButton>
          <NavButton to="/blog" activeClassName="active">Blog</NavButton>
          <NavButton to="/about" activeClassName="active">About</NavButton>
          { user.isAuthenticated
            ? <Button onClick={() => dispatch(logout())}>Sign out</Button>
            : <Button onClick={() => dispatch(login())}>Sign in</Button>
        }
        </Navigation>
      </NavBarContainer>
      { user.isAuthenticated && <AvatarProfile profile={user} /> }
    </StyledHeader>
  );
};

export default Header;
