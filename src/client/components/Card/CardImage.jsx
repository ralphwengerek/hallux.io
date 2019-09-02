/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';

const Image = styled.img`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  object-fit: cover;
  border-radius: 0px;
  width: 200px;
  height: 200px;
  padding: ${px(16)} 0 ${px(16)} ${px(16)};
  display: none;

  ${media.up.phone`
    padding: ${px(24)} 0 ${px(24)} ${px(24)};
    display: block;
  `}

  ${({ hero }) => hero && css`
    height: 240px;
    width: 100%;
    padding: ${px(16)};
    ${media.up.phone`
      padding: ${px(24)};
    `}
  `}
`;

export const CardImage = (props) => (
  <div>
    <Image {...props} />
  </div>
);

export default CardImage;
