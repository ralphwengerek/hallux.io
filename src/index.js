/* global module */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';


const root = document.getElementById('root');

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root,
  );
};

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
