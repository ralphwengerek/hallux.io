import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footerBackground};
    color: ${({ theme }) => theme.colors.footer};
    min-height: 60px;
`;

const Footer = () => (
  <StyledFooter>
    <p>FOOTER</p>
  </StyledFooter>
);

export default Footer;
