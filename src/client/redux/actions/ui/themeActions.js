
export const SET_THEME = '[ui] - Set theme';

export const setTheme = theme => ({
  type: SET_THEME,
  payload: {
    theme,
  },
});
