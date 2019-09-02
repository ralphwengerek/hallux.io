import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { media } from '../../utils/mediaQuery';

const CardContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    border-radius: 0;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position: relative;

    ${media.up.phone`
      box-shadow: 0 0 2px ${theme.colors.shadow};
    `}

    &:hover {
      box-shadow: 0px 3px 15px ${theme.colors.shadow};
    }
  `}
`;

export const Card = ({ children }) => (
  <CardContainer>
    {children}
  </CardContainer>
);

Card.Title = CardTitle;
Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardFooter;

Card.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Card;
