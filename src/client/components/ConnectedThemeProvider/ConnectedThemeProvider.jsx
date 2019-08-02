import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { light, dark } from '../../theme';
import { getTheme } from '../../redux/reducers/uiReducer';

const themes = {
  light,
  dark,
};

export const ConnectedThemeProvider = ({ children }) => {
  const currentTheme = useSelector(getTheme);
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      { children }
    </ThemeProvider>
  );
};

ConnectedThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ConnectedThemeProvider;
