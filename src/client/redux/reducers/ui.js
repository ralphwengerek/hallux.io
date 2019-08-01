
/* eslint-disable */
import handleActions from '../handleActions';
import { SET_THEME } from '../actions/ui';

export const initialState =  {
  theme: 'light',
};

const uiReducer = handleActions(
  {
    [SET_THEME]: (state, { theme }) => {
      console.log(theme);
      state.theme = theme;
    },
  },
  initialState,
);

export default uiReducer;

// Selectors

export const getTheme = ({ ui }) => ui.theme;

