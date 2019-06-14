import React from 'react';
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import mockTheme from './mocks/mockTheme';
import rootReducer from '../redux/reducers';
import realInitialState from '../redux/initialState';

const customRender = (node,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    theme = mockTheme,
  } = {}) => {
  const rendered = render(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        {node}
      </Router>
    </ThemeProvider>,
  );
  return {
    ...rendered,
    rerender: (ui, rerenderOptions) => customRender(ui,
      {
        container: rendered.container,
        ...rerenderOptions,
      }),
    // adding `theme` to the returned utilities to allow us to reference it in our tests.
    theme,
    // adding `history` to the returned utilities to allow us to reference it in our tests.
    history,
  };
};

const reduxRender = (node,
  {
    initialState = realInitialState,
    store = createStore(rootReducer, initialState),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    theme = mockTheme,
  } = {}) => {
  const rendered = render(
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          {node}
        </Router>
      </ThemeProvider>
    </ReduxProvider>,
  );

  return {
    ...rendered,
    rerender: ui => customRender(ui,
      {
        container: rendered.container,
      }),
    // adding `store` to the returned utilities to allow us to reference it in our tests.
    store,
    // adding `theme` to the returned utilities to allow us to reference it in our tests.
    theme,
    // adding `history` to the returned utilities to allow us to reference it in our tests.
    history,
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export {
  customRender as render,
  reduxRender as renderWithRedux,
};
