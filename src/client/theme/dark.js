import { px } from '../utils/pixel';

export const dark = {
  name: 'dark',
  colors: {
    background: '#313131',
    primary: '#40a9ff',
    accent: '#8BC34A',
    body: '#d8d8d8',
    border: '#e3e3e3',
    divider: '#BDBDBD',
    loader: '#fff',
    shadow: '#171717',
    error: '#d01010',
    disabled: '#4b4b4b',
    // Footer
    footer: '#ccc',
    footerBackground: '#333',
    // Buttons
    buttonActive: '#096dd9',
    // Tag,
    tagBackground: '#3d3d3d',
    // Input
    inputBorder: '#3fa9ff3d',
  },
  typography: {
    fontFamily: 'Nunito Sans, Montserrat',
    title: px(32),
    larger: px(24),
    large: px(20),
    normal: px(16),
    small: px(12),
    smaller: px(8),
  },
  sizing: {
    desktop: '860px',
    mobile: '100%',
  },
};

export default dark;
