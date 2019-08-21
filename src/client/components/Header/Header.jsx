import React from 'react';
import styled from 'styled-components';
import { Switch, Tooltip } from 'antd';
import { FaSun, FaRegMoon } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';
import { Hamburger } from '../Navigation/Hamburger';
import { Navigation } from '../Navigation/Navigation';
import { Avatar } from '../Avatar/Avatar';
import { getUser, getUserIsAuthenticated } from '../../redux/reducers/userReducer';
import { toggleProfilePanel } from '../../redux/actions/ui/profilePanelActions';
import { setTheme } from '../../redux/actions/ui/themeActions';
import { getTheme } from '../../redux/reducers/uiReducer';

const HeaderContainer = styled.header`
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.shadow};
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
  padding: 0 ${px(16)};
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
  margin-left: ${px(16)};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: ${px(24)};

  ${media.up.tablet`
    font-size: ${px(32)};
  `}
`;

const AvatarLink = styled.div`
  cursor: pointer;
  margin-left: ${px(32)};
  margin-right: ${px(16)};
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
  const isAuthenticated = useSelector(getUserIsAuthenticated);
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
          <Title to="/">
            Hallux.io
          </Title>
        </Company>

        <RightSection>
          <Navigation />
          <Tooltip placement="bottomRight" title={theme === 'light' ? 'Turn off the lights' : 'Turn on the lights'}>
            <Switch
              checkedChildren={<SwitchIcon><FaSun /></SwitchIcon>}
              unCheckedChildren={<SwitchIcon><FaRegMoon /></SwitchIcon>}
              onChange={onThemeChange}
              checked={theme === 'light'}
            />
          </Tooltip>
          { isAuthenticated && (
            <AvatarLink onClick={onAvatarClick}>
              <Avatar picture={user.picture}>&nbsp;</Avatar>
            </AvatarLink>
          )}
        </RightSection>
      </NavBarContainer>
    </HeaderContainer>
  );
};

export default Header;
