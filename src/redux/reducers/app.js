
/* eslint-disable */
import handleActions from '../handleActions';
import initialState from '../initialState';

const appReducer = handleActions(
  {
    TOGGLE_PROFILE_PANEL: (app) => {
      app.showProfileDrawer = !app.showProfileDrawer;
    },
    OPEN_PROFILE_PANEL: (app) => {
      app.showProfileDrawer = true;
    },
    CLOSE_PROFILE_PANEL: (app) => {
      app.showProfileDrawer = false;
    },
  },
  initialState.app,
);

export default appReducer;

// Selectors

export const getAppState = ({ app }) => app;

export const getProfileDrawerState = ({ app }) => app.showProfileDrawer;

