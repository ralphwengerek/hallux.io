import { createGlobalStyle, css } from 'styled-components';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      font-family: ${theme.typography.fontFamily};
      font-size: ${px(16)};
      color: ${theme.colors.body};
    }
    *:focus {
      outline: none;
    }

    iframe {
      min-height: 320px;
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
        font-size: ${px(48)};
      `}
    }

    h2 {
      font-size: ${px(20)};

      ${media.up.tablet`
        font-size: ${px(24)};
      `}

      ${media.up.desktop`
        font-size: ${px(28)};
      `}
    }

    h3 {
      font-size: ${px(18)};

      ${media.up.tablet`
        font-size: ${px(20)};
      `}

      ${media.up.desktop`
        font-size: ${px(22)};
      `}
    }

    /* Ant Overrides */
    .ant-input {
      background-color: ${theme.colors.background};
      color: ${theme.colors.body};
      border-color: ${theme.colors.inputBorder};
    }
    .ant-input-group-addon {
      background-color: ${theme.colors.background};
      border-color: ${theme.colors.inputBorder};
      color: ${theme.colors.body};
    }

  `}
`;

export default GlobalStyle;
