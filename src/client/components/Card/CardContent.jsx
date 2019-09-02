import styled, { css } from 'styled-components';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';

export const CardContent = styled.div`
  padding: ${px(16)} ${px(16)} ${px(8)} ${px(16)};
  ${media.up.phone`
    padding: ${px(24)} ${px(24)} ${px(16)} ${px(24)};
  `}

  ${({ hero }) => hero && css`
    padding: 0 ${px(16)} ${px(8)} ${px(16)};
    ${media.up.phone`
      padding: 0 ${px(24)} ${px(16)} ${px(24)};
    `}
  `}


`;

export default CardContent;
