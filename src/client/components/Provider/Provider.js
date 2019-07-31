import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import ReduxToastr from 'react-redux-toastr';
import PropTypes from 'prop-types';
import configureStore, { history } from '../../redux/configureStore';
import { lightTheme } from '../../theme';

const store = configureStore();
// const baseName = process.env.BASE_URL;

export const Provider = ({ children }) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={lightTheme}>
      <ConnectedRouter history={history}>
        { children}
      </ConnectedRouter>
    </ThemeProvider>
    <ReduxToastr
      timeOut={4000}
      newestOnTop
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      closeOnToastrClick
    />
  </ReduxProvider>
);

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
