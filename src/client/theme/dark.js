import { px } from '../utils/pixel';

export const dark = {
  colors: {
    background: '#313131',
    primary: '#40a9ff',
    accent: '#8BC34A',
    body: '#fff',
    border: '#e3e3e3',
    divider: '#BDBDBD',
    loader: '#333',
    shadow: '#171717',
    // Footer
    footer: '#ccc',
    footerBackground: '#333',
    // Buttons
    buttonActive: '#096dd9',
    // Tag,
    tagBackground: '#3d3d3d',
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
