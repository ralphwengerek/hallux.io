import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HalluxLogo from '../icons/hallux';


const NavBarContainer = styled.div`
  align-items: center;
  display:flex;
  justify-content: space-between;
  margin: 0 20px 0 20px;
  min-height: 60px;
  width: 100%;
`;

const Logo = styled(HalluxLogo)`
  height: 40px;
  width: 40px;
`;

const Menu = styled.div``;

const NavButton = styled(Link)`
  margin:20px;
`;

const NavBar = () => (
  <NavBarContainer>
    <Logo />
    <Menu>
      <NavButton to="/">Home</NavButton>
      <NavButton to="/blog">Blog</NavButton>
      <NavButton to="/about">About</NavButton>
    </Menu>
  </NavBarContainer>
);

export default NavBar;
