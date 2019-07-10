import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 16px;
    color: #555555;
  }
  .react-icons {
    vertical-align: middle;
  }
`;

export default GlobalStyle;
