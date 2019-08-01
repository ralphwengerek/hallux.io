import React from 'react';
import styled from 'styled-components';
import { Switch } from 'antd';
import { FaSun, FaRegMoon } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';
import { Hamburger } from '../Navigation/Hamburger';
import { Navigation } from '../Navigation/Navigation';
import { Avatar } from '../Avatar/Avatar';
import { getUser } from '../../redux/reducers/user';
import { toggleProfilePanel } from '../../redux/actions/profilePanel';
import { setTheme } from '../../redux/actions/ui';
import { getTheme } from '../../redux/reducers/ui';

const HeaderContainer = styled.header`
  box-shadow: 0 0 5px #cccccc;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 101;
  background-color: ${({ theme }) => theme.colors.background};
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

  ${media.up.hires`
      max-width: 1080px;
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

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchIcon = styled.div`
  margin-top: 2px;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const theme = useSelector(getTheme);

  const onAvatarClick = (event) => {
    event.stopPropagation();
    dispatch(toggleProfilePanel());
  };

  const onThemeChange = (checked) => {
    dispatch(setTheme(checked ? 'light' : 'dark'));
  };

  return (
    <HeaderContainer>
      <NavBarContainer>
        <Company>
          <Hamburger />
          <Title to="/">Hallux.io</Title>
        </Company>

        <RightSection>
          <Navigation />
          <Switch
            checkedChildren={<SwitchIcon><FaSun /></SwitchIcon>}
            unCheckedChildren={<SwitchIcon><FaRegMoon /></SwitchIcon>}
            onChange={onThemeChange}
            checked={theme === 'light'}
          />
          { user.isAuthenticated && (
            <AvatarLink onClick={onAvatarClick}>
              <Avatar picture={user.picture}>&nbsp;</Avatar>
            </AvatarLink>
          )
        }
        </RightSection>
      </NavBarContainer>
    </HeaderContainer>
  );
};

export default Header;
