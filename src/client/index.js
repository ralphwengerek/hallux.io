/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { Layout, Provider } from './components';
import 'normalize.css';
import 'highlight.js/styles/github.css';

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
