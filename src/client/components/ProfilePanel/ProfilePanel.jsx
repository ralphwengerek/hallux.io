import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { getprofilePanelState } from '../../redux/reducers/uiReducer';
import { closeProfilePanel } from '../../redux/actions/ui/profilePanelActions';
import { getUser } from '../../redux/reducers/userReducer';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';
import { Avatar } from '../Avatar/Avatar';
import { logout } from '../../redux/actions/userActions';
import { Button } from '../Button/Button';

const PanelContainer = styled.aside.attrs({ role: 'dialog' })`
  display: flex;
  color: ${({ theme }) => theme.colors.body};
  position: absolute;
  display: inline-block;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.shadow};
  transition: all .4s cubic-bezier(0.42, 0.01, 0.21, 1);
  z-index: 10;
  right: 0px;
  top: 0px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.border};
  height: 100vh;
  overflow: hidden;
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.name === 'light' ? '#f6f7f9 linear-gradient(to bottom,#fff,#fff 4.75rem,#e8ebf1 4.75rem,#e8ebf1 4.8125rem,#f6f7f9 4.8125rem,#f6f7f9)' : theme.colors.background};
  `}

  ${media.up.tablet`
    height: 350px;
    width: 300px;

    border-top: none;
    border-radius: 0px 0px 3px 3px;
  `}

  &.slide-enter {
    transform: translateY(-100%);
  }
  &.slide-enter-active {
    transform: translateY(0);
  }
  &.slide-exit {
    transform: translateY(0);
  }
  &.slide-exit-active {
    transform: translateY(-100%);
  }
`;
PanelContainer.displayName = 'PanelContainer';

const ProfileContainer = styled.div`
  padding: ${px(24)} 0;
  margin: 0 auto;
  text-align: center;
`;

const UserAttribute = styled.div`
  font-size: ${({ theme }) => theme.typography.large};
`;

const ProfileAction = styled.div`
  padding: ${px(16)} 0;
  text-align: center;
`;

export const ProfilePanel = () => {
  const open = useSelector(getprofilePanelState);
  const user = useSelector(getUser);
  const panelRef = useRef(null);
  const dispatch = useDispatch();
  const isOpen = useSelector(getprofilePanelState);

  const signOutClick = () => dispatch(logout());
  const createPostClick = () => {
    dispatch(push('/blog/create'));
    dispatch(closeProfilePanel());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !panelRef.current.contains(event.target)) {
        dispatch(closeProfilePanel());
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <CSSTransition
      in={open}
      classNames="slide"
      timeout={400}
      unmountOnExit
    >
      <PanelContainer ref={panelRef}>
        <ProfileContainer>
          <Avatar picture={user.picture} size={px(64)} />
          <UserAttribute>{user.name}</UserAttribute>
        </ProfileContainer>

        <ProfileAction>
          <Button onClick={createPostClick}>
              Create post
          </Button>
        </ProfileAction>
        <ProfileAction>
          <Button onClick={signOutClick}>
              Sign out
          </Button>
        </ProfileAction>
      </PanelContainer>
    </CSSTransition>
  );
};

export default ProfilePanel;
