import React from 'react';
import styled, { css } from 'styled-components';
import { FaBlog, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { NavButton } from './NavButton';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';
import { getMenuState } from '../../redux/reducers/uiReducer';
import { closeMenu } from '../../redux/actions/ui/menuActions';

const NavigationContainer = styled.nav`
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  padding: 0 ${px(16)};
  width: 100%;
  top: 50px;
  left: 0px;
  height: 100vh;
  z-index: 10;
  transition: all .3s cubic-bezier(0.42, 0.01, 0.21, 1);
  background: ${({ theme }) => theme.colors.background};

  ${media.down.phone`
    &.fade-enter {
      transform: translateY(10%);
      opacity: 0;
    }
    &.fade-enter-active {
      transform: translateY(0);
      opacity: 1;
    }
    &.fade-exit {
      transform: translateY(0);
      opacity: 1;
    }
    &.fade-exit-active {
      transform: translateY(10%);
      opacity: 0;
    }
  `}

  ${({ open }) => !open && css`
    transform: translateY(10);
    opacity: 0;
    display: none;
  `}

  ${media.up.phone`
    ${({ open }) => !open && css`
      transform: translateY(0);
      opacity: 1;
      display: flex;
    `}
    top: 0px;
    background: none;
    position: relative;
    flex-direction: row;
    width: unset;
    height: unset;
  `}

`;


export const Navigation = () => {
  const open = useSelector(getMenuState);
  const dispatch = useDispatch();
  const closeMenuAction = () => dispatch(closeMenu());
  return (
    <CSSTransition
      in={open}
      classNames="fade"
      timeout={300}
    >
      <NavigationContainer open={open}>
        <NavButton to="/" onClick={closeMenuAction} icon={<FaBlog />} text="Blog" />
        <NavButton to="/about" onClick={closeMenuAction} icon={<FaInfoCircle />} text="About" />
        <NavButton to="/contact" onClick={closeMenuAction} icon={<FaEnvelope />} text="Contact" />
      </NavigationContainer>
    </CSSTransition>
  );
};

export default Navigation;
