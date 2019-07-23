import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { px } from '../../utils/pixel';

const StyledButton = styled.button.attrs({ 'data-testid': 'button' })`
  margin: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s;
  border: solid 2px #1976D2;
  padding: ${px(7)};
  background-color: #fff;
  border-radius: ${px(4)};
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
  &:focus {
    outline: none;
  }
  &:active {
    color: ${({ theme }) => theme.colors.buttonActive};
    border-color: ${({ theme }) => theme.colors.buttonActive};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border: solid ${px(2)} ${({ theme }) => theme.colors.accent};
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    >span {
    }
  }
`;

export const Button = ({ children, ...rest }) => (
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
