import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import Provider from '../components/Provider/Provider';

const DefaultProviders = ({ children }) => (
  <Provider>
    {children}
  </Provider>
);

DefaultProviders.propTypes = {
  children: PropTypes.element.isRequired,
};

const customRender = (ui, options) => render(
  ui, { wrapper: DefaultProviders, ...options },
);

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
