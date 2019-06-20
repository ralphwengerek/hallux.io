import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { getProfileDrawerState } from '../../redux/reducers/app';
import px from '../../utils/sizeMixin';
import media from '../../utils/mediaQuery';

const PanelContainer = styled.aside.attrs({ role: 'dialog' })`
  position: fixed;
  height: auto;
  background: #fff;
  box-shadow: 0 0 ${px(10)} 0 rgba(0,0,0,.15);
  overflow-y: auto;
  transition: all .5s ease;
  width: 150px;
  z-index: 100;
  right: 0px;

  top: ${px(50)};
  bottom: ${px(40)};

  ${media.up.tablet`
    top: ${px(60)};
    bottom: ${px(60)};
  `}

  &.slide-enter {
    right: -150px;
  }
  &.slide-enter-active {
    right: 0px;
  }
  &.slide-exit {
    right: 0px;
  }
  &.slide-exit-active {
    right: -150px;
  }
`;
PanelContainer.displayName = 'PanelContainer';

const ProfilePanel = () => {
  const open = useSelector(getProfileDrawerState);
  return (
    <CSSTransition
      in={open}
      classNames="slide"
      timeout={300}
      unmountOnExit
    >
      <PanelContainer>
      panel
      </PanelContainer>
    </CSSTransition>
  );
};

export default ProfilePanel;
