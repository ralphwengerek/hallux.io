import { createGlobalStyle, css } from 'styled-components';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      font-family: ${theme.typography.fontFamily};
      font-size: 16px;
      color: #555555;
    }
    *:focus {
      outline: none;
    }
    .react-icons {
      vertical-align: middle;
    }

    h1,h2,h3 {
      background: -webkit-linear-gradient(${theme.colors.primary}, ${theme.colors.accent});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1 {
      font-size: ${px(32)};

      ${media.up.tablet`
        font-size: ${px(40)};
      `}

      ${media.up.desktop`
        font-size: ${px(56)};
      `}
    }

    h2 {
      font-size: ${px(24)};

      ${media.up.tablet`
        font-size: ${px(32)};
      `}

      ${media.up.desktop`
        font-size: ${px(40)};
      `}
    }

    h3 {
      font-size: ${px(16)};

      ${media.up.tablet`
        font-size: ${px(24)};
      `}

      ${media.up.desktop`
        font-size: ${px(40)};
      `}
    }

  `}
`;

export default GlobalStyle;
