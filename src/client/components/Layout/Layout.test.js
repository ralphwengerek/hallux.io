import React from 'react';
import Layout from './Layout';
import { render } from '../../utils/testUtils';

describe('<Layout />', () => {
  test('renders', () => {
    render(<Layout />);
  });
});
