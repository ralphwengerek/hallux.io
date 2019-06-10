import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  box-shadow: 0 0 5px #cccccc;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-out;
  width: 100%;
  z-index: 9000000;
`;

const Header = () => (
  <StyledHeader>
    <NavBar />
  </StyledHeader>
);

export default Header;
