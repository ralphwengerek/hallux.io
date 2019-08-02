import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { px } from '../../utils/pixel';

const StyledButton = styled.button.attrs({
  'data-testid': 'button',
  type: 'button',
})`
  ${({ theme: { colors }, link }) => css`
    cursor: pointer;
    margin: 0;
    text-decoration: none;
    color: ${colors.primary};
    transition: all 0.2s;
    border: solid 2px ${colors.primary};
    padding: ${px(7)};
    border-radius: ${px(4)};
    box-shadow: 0 0 5px ${colors.shadow};
    background-color: ${colors.background};

    &.active {
      color: ${colors.accent};
    }
    &:focus {
      outline: none;
    }
    &:active {
      color: ${colors.buttonActive};
      border-color: ${colors.buttonActive};
    }
    &:hover {
      color: ${colors.accent};
      border: solid ${px(2)} ${colors.accent};
      box-shadow: 0 0 2px ${colors.shadow};
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
        color: ${colors.buttonActive};
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

    &:disabled {
      color: ${colors.disabled};
      border-color: ${colors.disabled};
      cursor: default;
      box-shadow: none;
    }
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
