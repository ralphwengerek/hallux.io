import { px } from '../utils/pixel';

export const light = {
  colors: {
    background: '#ffffff',
    primary: '#40a9ff',
    accent: '#8BC34A',
    body: '#555555',
    border: '#e3e3e3',
    divider: '#BDBDBD',
    loader: '#333',
    shadow: '#d0d0d0',
    // Footer
    footer: '#ccc',
    footerBackground: '#333',
    // Buttons
    buttonActive: '#096dd9',
    // Tag,
    tagBackground: '#f7f7f7',
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

export default light;
