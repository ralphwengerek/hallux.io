import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.a`
  margin: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s;
  cursor: pointer;
  border: solid 2px #1976D2;
  padding: 7px;
  border-radius: 4px;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border: solid 2px ${({ theme }) => theme.colors.accent};
  }
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    <span>{children}</span>
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
};

export default Button;
