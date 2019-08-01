import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { light, dark } from '../../theme';
import { getTheme } from '../../redux/reducers/ui';

const themes = {
  light,
  dark,
};

export const ConnectedThemeProvider = ({ children }) => {
  const currentTheme = useSelector(getTheme);
  console.log('THEME:', currentTheme);
  console.log('THEMES:', themes);
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
