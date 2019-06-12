import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import mockTheme from './mocks/mockTheme';

// TODO: REDUX MockSTORE
const customRender = (node, options) => {
  const rendered = render(
    <ThemeProvider theme={mockTheme}>
      <MemoryRouter>{node}</MemoryRouter>
    </ThemeProvider>,
    { ...options },
  );
  return {
    ...rendered,
    rerender: (ui, rerenderOptions) => customRender(ui,
      {
        container: rendered.container,
        ...rerenderOptions,
      }),
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
