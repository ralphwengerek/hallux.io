import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { px } from '../../utils/pixel';

const StyledButton = styled.a`
  margin: ${px(16)};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
  &:hover {
    transform: scale(1.2);
  }
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    { children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
};

export default Button;
