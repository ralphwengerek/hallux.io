import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { px } from '../../utils/pixel';

const StyledButton = styled.button.attrs({
  'data-testid': 'button',
  type: 'button',
})`
  ${({ theme, link }) => css`
    margin: 0;
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: all 0.2s;
    border: solid 2px #1976D2;
    padding: ${px(7)};
    border-radius: ${px(4)};
    box-shadow: 0 0 5px ${theme.colors.shadow};

    &.active {
      color: ${theme.colors.accent};
    }
    &:focus {
      outline: none;
    }
    &:active {
      color: ${theme.colors.buttonActive};
      border-color: ${theme.colors.buttonActive};
    }
    &:hover {
      color: ${theme.colors.accent};
      border: solid ${px(2)} ${theme.colors.accent};
      box-shadow: 0 0 2px ${theme.colors.shadow};
      >span {
      }
    }

    ${link && css`
      border: none;
      padding: 0;
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;

      &:active {
        color: ${theme.colors.buttonActive};
      }
      &:hover {
        border: none;
        box-shadow: none;
        cursor: pointer;
        >span {
          text-decoration: underline;
        }
      }
    `}
  `}
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
