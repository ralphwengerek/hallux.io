import React from 'react';
import { render } from '../../utils/testUtils';
import Blog from './Blog';

describe('<Blog />', () => {
  it('renders', () => {
    render(<Blog />);
  });
});
