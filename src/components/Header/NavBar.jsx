import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import px from '../../utils/sizeMixin';
import media from '../../utils/mediaQuery';

const NavBarContainer = styled.div`
  align-items: center;
  display:flex;
  justify-content: space-between;
  margin: 0 ${px(8)};
  min-height: 40px;
  color: #fff;

  ${media.up.tablet`
    margin: 0 ${px(32)};
    min-height: 60px;
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
  font-family: 'Roboto';
  font-weight: bold;
  font-size: ${px(24)};

  ${media.up.tablet`
    font-size: ${px(32)};
  `}

`;

const Menu = styled.div``;

const NavButton = styled(Link)`
  margin: ${px(16)};
`;

const NavBar = () => (
  <NavBarContainer>
    <Company>
      <Title to="/">Hallux.io</Title>
    </Company>
    <Menu>
      <NavButton to="/">Home</NavButton>
      <NavButton to="/blog">Blog</NavButton>
      <NavButton to="/about">About</NavButton>
    </Menu>
  </NavBarContainer>
);

export default NavBar;
