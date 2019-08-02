import React from 'react';
import styled, { css } from 'styled-components';
import { FaBlog, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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

const NavButton = styled(NavLink)`
  margin: ${px(16)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;

  border-radius: 24px;
  border: solid 1px;
  padding: ${px(16)} ${px(32)};

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
  &:hover {
    transform: scale(1.2);
  }

  ${media.up.phone`
    border: none;
    padding: 0px;
    display: flex;
    align-items: center;
    margin: 0px ${px(16)};
  `}
`;

const NavIcon = styled.div`
  text-align: center;
  font-size: ${px(24)};
  display: flex;
  margin: 0px 8px;
  justify-content: center;
`;

const NavText = styled.span``;

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
        <NavButton to="/" exact activeClassName="active" onClick={closeMenuAction}>
          <NavIcon><FaBlog /></NavIcon>
          <NavText>Blog</NavText>
        </NavButton>
        <NavButton to="/about" activeClassName="active" onClick={closeMenuAction}>
          <NavIcon><FaInfoCircle /></NavIcon>
          <NavText>About</NavText>
        </NavButton>
        <NavButton to="/contact" activeClassName="active" onClick={closeMenuAction}>
          <NavIcon><FaEnvelope /></NavIcon>
          <NavText>Contact</NavText>
        </NavButton>
      </NavigationContainer>
    </CSSTransition>
  );
};

export default Navigation;
