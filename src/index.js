/* global module */
import React from 'react';
import { render } from 'react-dom';
import { Layout, Provider } from './components';

const root = document.getElementById('root');

const renderApp = () => {
  render(
    <Provider>
      <Layout />
    </Provider>,
    root,
  );
};

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
