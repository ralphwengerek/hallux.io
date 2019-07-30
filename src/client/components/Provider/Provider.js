import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import configureStore from '../../redux/configureStore';
import { lightTheme } from '../../theme';

const store = configureStore();
// const baseName = process.env.BASE_URL;

export const Provider = ({ children }) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={lightTheme}>
      <Router>
        { children}
      </Router>
    </ThemeProvider>
  </ReduxProvider>
);

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
