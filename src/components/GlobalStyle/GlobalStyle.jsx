import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 16px;
  }
`;

export default GlobalStyle;
