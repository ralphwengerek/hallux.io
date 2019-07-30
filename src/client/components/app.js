import React from 'react';
import { Provider } from './Provider/Provider';
import { Layout } from './Layout/Layout';

const App = () => (
  <Provider>
    <Layout />
  </Provider>
);

export default App;
