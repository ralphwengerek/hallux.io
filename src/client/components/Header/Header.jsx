import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';
import Hamburger from '../Navigation/Hamburger';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { login } from '../../redux/actions/user';
import { getUser } from '../../redux/reducers/user';
import { toggleProfilePanel } from '../../redux/actions/profilePanel';

const HeaderContainer = styled.header`
  box-shadow: 0 0 5px #cccccc;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const NavBarContainer = styled.div`
  align-items: center;
  display:flex;
  justify-content: space-between;
  padding: 0 ${px(8)};
  min-height: 50px;
  color: #fff;
  transition: all 0.5s ease;
  width:100%;

  ${media.up.tablet`
    min-height: 60px;
  `}

  ${media.up.desktop`
    max-width: ${({ theme }) => theme.sizing.desktop};
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

const AvatarLink = styled.a`
  color: #000;
  cursor: pointer;
  text-decoration: none;
`;

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const onAvatarClick = (event) => {
    event.stopPropagation();
    dispatch(toggleProfilePanel());
  };

  return (
    <HeaderContainer>
      <NavBarContainer>
        <Company>
          <Hamburger />
          <Title to="/">Hallux.io</Title>
        </Company>

        <Navigation />
        { user.isAuthenticated
          ? (
            <AvatarLink onClick={onAvatarClick}>
              <Avatar picture={user.picture}>&nbsp;</Avatar>
            </AvatarLink>
          )
          : <Button onClick={() => dispatch(login())}>Sign in</Button>
        }
      </NavBarContainer>
    </HeaderContainer>
  );
};

export default Header;
