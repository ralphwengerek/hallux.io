/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '../../utils/testUtility';
import { Link } from './Link';

const renderComponent = (props) => render(<Link to="/test" {...props} />);

describe('<Link/>', () => {
  it('renders with theme styles', () => {
    const { getByTestId, theme } = renderComponent();
    const link = getByTestId('link');
    expect(link).toHaveStyleRule('color', theme.colors.buttonActive, {
      modifier: '&:active',
    });
    expect(link).toHaveStyleRule('color', theme.colors.accent, {
      modifier: '&:hover',
    });
  });
});
