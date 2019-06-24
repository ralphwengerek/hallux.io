import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';
import { getMenuState } from '../../redux/reducers/menu';
import { closeMenu } from '../../redux/actions/menu';

const NavigationContainer = styled.nav`
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 50px;
  left: 0px;
  height: calc(100vh - 90px);
  z-index: 10;
  transition: all .4s cubic-bezier(0.42, 0.01, 0.21, 1);
  background: #fff linear-gradient(to bottom,#f5f5f5,#e8e8e8);

  ${media.up.phone`
    top: 0px;
    background: none;
    position: relative;
    flex-direction: row;
    width: unset;
    height: unset;
  `}

  ${media.down.phone`
    &.slide-enter {
      transform: translateX(-100%);
    }
    &.slide-enter-active {
      transform: translateX(0);
    }
    &.slide-exit {
      transform: translateX(0);
    }
    &.slide-exit-active {
      transform: translateX(-100%);
    }
  `}
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

const Navigation = () => {
  const open = useSelector(getMenuState);
  const dispatch = useDispatch();
  const closeMenuAction = () => dispatch(closeMenu());
  return (
    <CSSTransition
      in={open}
      classNames="slide"
      timeout={400}
      unmountOnExit
    >
      <NavigationContainer>
        <NavButton to="/" exact activeClassName="active" onClick={closeMenuAction}>Home</NavButton>
        <NavButton to="/blog" activeClassName="active" onClick={closeMenuAction}>Blog</NavButton>
        <NavButton to="/about" activeClassName="active" onClick={closeMenuAction}>About</NavButton>
      </NavigationContainer>
    </CSSTransition>
  );
};

export default Navigation;
