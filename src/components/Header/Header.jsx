import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import px from '../../utils/sizeMixin';
import media from '../../utils/mediaQuery';
import AvatarProfile from '../AvatarProfile/AvatarProfile';
import Button from '../Button/Button';
import { login } from '../../redux/actions/user';
import { getUser } from '../../redux/reducers/user';

const StyledHeader = styled.header`
  box-shadow: 0 0 5px #cccccc;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;
  background-color: #fff;
`;

const NavBarContainer = styled.div`
  align-items: center;
  display:flex;
  justify-content: space-between;
  margin: 0 ${px(8)};
  min-height: 40px;
  color: #fff;
  transition: all 0.5s ease;

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

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const NavButton = styled(NavLink)`
  margin: ${px(16)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
  &:hover {
    transform: scale(1.2);
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
            ? <AvatarProfile profile={user} />
            : <Button onClick={() => dispatch(login())}>Sign in</Button>
          }
        </Navigation>
      </NavBarContainer>

    </StyledHeader>
  );
};

export default Header;
