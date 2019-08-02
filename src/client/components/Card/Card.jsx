import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { px } from '../../utils/pixel';


const CardContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    border-radius: ${px(3)};
    box-shadow: 0 0 5px ${theme.colors.shadow};
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position: relative;

    &:hover {
      box-shadow: 0 0 2px ${theme.colors.shadow};
    }
  `}

`;

export const Card = ({ children }) => (
  <CardContainer>
    {children}
  </CardContainer>
);

Card.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Card;
