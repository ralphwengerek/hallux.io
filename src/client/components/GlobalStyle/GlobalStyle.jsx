import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 16px;
    color: #555555;
  }
  *:focus {
    outline: none;
  }
  .react-icons {
    vertical-align: middle;
  }
`;

export default GlobalStyle;
