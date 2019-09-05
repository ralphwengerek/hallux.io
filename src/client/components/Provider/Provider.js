import { hot } from 'react-hot-loader';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import { message } from 'antd';
import configureStore, { history } from 'store/configureStore';
import { ConnectedThemeProvider } from '../ConnectedThemeProvider/ConnectedThemeProvider';
import 'antd/dist/antd.css';

message.config({
  top: 70,
});

const store = configureStore();
// const baseName = process.env.BASE_URL;

export const Provider = ({ children }) => (
  <ReduxProvider store={store}>
    <ConnectedThemeProvider>
      <ConnectedRouter history={history}>
        { children}
      </ConnectedRouter>
    </ConnectedThemeProvider>
  </ReduxProvider>
);

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default hot(module)(Provider);
