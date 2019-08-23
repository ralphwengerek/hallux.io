import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';
import { px } from '../../utils/pixel';

export const Content = styled.div`
  padding: ${px(16)};
  ${media.up.phone`
    padding: ${px(32)};
  `}
`;

export default Content;
