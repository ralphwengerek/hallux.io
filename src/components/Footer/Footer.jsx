import React from 'react';
import styled from 'styled-components';
import media from '../../utils/mediaQuery';

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footerBackground};
    color: ${({ theme }) => theme.colors.footer};
    min-height: 40px;
    transition: all 0.5s ease;

    ${media.up.tablet`
      min-height: 60px;
    `}
`;

const Footer = () => (
  <StyledFooter>
    FOOTER
  </StyledFooter>
);

export default Footer;
