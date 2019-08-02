import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';

const NavIcon = styled.div`
  text-align: center;
  font-size: ${px(24)};
  display: flex;
  margin: 0px 8px;
  justify-content: center;
`;

const NavText = styled.span``;

const StyledNavLink = styled(NavLink)`
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

const NavButtonContainer = styled.div`
  min-width: 55px;
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.up.phone`

  `}

`;

export const NavButton = ({ icon, text, ...rest }) => (
  <StyledNavLink exact activeClassName="active" {...rest}>
    <NavButtonContainer>
      {icon && <NavIcon>{icon}</NavIcon>}
      <NavText>{text}</NavText>
    </NavButtonContainer>
  </StyledNavLink>
);

NavButton.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string.isRequired,
};

NavButton.defaultProps = {
  icon: <span />,
};

export default NavButton;
