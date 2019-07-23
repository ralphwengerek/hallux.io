import { px } from '../utils/pixel';

const lightTheme = {
  colors: {
    background: '#ffffff',
    primary: '#1976D2',
    accent: '#8BC34A',
    body: '#555555',
    border: '#e3e3e3',
    divider: '#BDBDBD',
    loader: '#333',
    // Footer
    footer: '#ccc',
    footerBackground: '#333',
    // Buttons
    buttonActive: '#364b1e',
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

export default lightTheme;
