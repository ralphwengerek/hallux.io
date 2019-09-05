/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '../../utils/testUtility';
import { Loader } from './Loader';
import { px } from '../../utils/pixel';

const renderComponent = (props) => render(<Loader {...props} />);

describe('<Loader/>', () => {
  it('renders visible by default with a size of 40', () => {
    const { getByTestId, theme } = renderComponent();
    const cube = getByTestId('loader');
    expect(cube).toHaveStyleRule('width', px(40), {
      modifier: '.sk-folding-cube',
    });
    expect(cube).toHaveStyleRule('height', px(40), {
      modifier: '.sk-folding-cube',
    });
    expect(cube).toHaveStyleRule('background', theme.colors.loader, {
      modifier: '.sk-folding-cube .sk-cube:before',
    });
  });

  it('does not display when the show prop is false', () => {
    const { queryByTestId } = renderComponent({ show: false });
    expect(queryByTestId('loader')).toBe(null);
  });

  it('changes the size of the loader when size is given', () => {
    const { getByTestId } = renderComponent({ size: 80 });
    const cube = getByTestId('loader');
    expect(cube).toHaveStyleRule('width', px(80), {
      modifier: '.sk-folding-cube',
    });
    expect(cube).toHaveStyleRule('height', px(80), {
      modifier: '.sk-folding-cube',
    });
  });
});
