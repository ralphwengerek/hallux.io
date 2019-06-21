import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { getProfileDrawerState } from '../../redux/reducers/app';
import { closeProfilePanel } from '../../redux/actions/app';
import { getUser } from '../../redux/reducers/user';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';
import Avatar from '../Avatar/Avatar';
import useOutsideClickListener from '../../hooks/useOutsideClickListener';

const PanelContainer = styled.aside.attrs({ role: 'dialog' })`
  position: absolute;
  display: inline-block;
  height: auto;
  background: #f6f7f9 linear-gradient(to bottom,#fff,#fff 4.75rem,#e8ebf1 4.75rem,#e8ebf1 4.8125rem,#f6f7f9 4.8125rem,#f6f7f9);
  box-shadow: 0 0 ${px(10)} 0 rgba(0,0,0,.15);
  overflow-y: auto;
  transition: all .3s ease;
  z-index: 100;
  right: 0px;
  top: 0;
  border-bottom: solid 1px ${({ theme }) => theme.colors.border};
  height: 100%;
  width: 100%;

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

const ProfilePanel = () => {
  const open = useSelector(getProfileDrawerState);
  const user = useSelector(getUser);
  const panelRef = useRef(null);
  const [isOutsideClick] = useOutsideClickListener(panelRef);
  const dispatch = useDispatch();
  const isOpen = useSelector(getProfileDrawerState);

  useEffect(() => {
    if (isOpen) {
      dispatch(closeProfilePanel());
    }
  }, [isOutsideClick]);

  return (
    <CSSTransition
      in={open}
      classNames="slide"
      timeout={300}
      unmountOnExit
    >
      <PanelContainer ref={panelRef}>
        <ProfileContainer>
          <Avatar picture={user.picture} size={px(64)} />
          <UserAttribute>{user.name}</UserAttribute>
        </ProfileContainer>

      </PanelContainer>
    </CSSTransition>
  );
};

export default ProfilePanel;
