import React from 'react';
import { render } from '../../utils/testUtils';
import { Header } from './Header';

describe('<Header />', () => {
  it('renders', () => {
    render(<Header />);
  });
});
