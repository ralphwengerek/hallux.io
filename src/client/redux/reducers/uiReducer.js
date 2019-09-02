/* eslint-disable */
import handleActions from '../handleActions';
import {
  TOGGLE_MENU,
  OPEN_MENU,
  CLOSE_MENU,
 } from '../actions/ui/menuActions'

 import {
  TOGGLE_PROFILE_PANEL,
  OPEN_PROFILE_PANEL,
  CLOSE_PROFILE_PANEL,
} from '../actions/ui/profilePanelActions';

import {
  SHOW_LOADER,
  HIDE_LOADER,
} from '../actions/ui/loaderActions';

import { SET_THEME } from '../actions/ui/themeActions';

export const initialState = {
  theme: 'light',
  showMenu: false,
  showProfilePanel: false,
};

const uiReducer = handleActions(
  {
    // Loader
    [SHOW_LOADER]: (ui) => {
      ui.showLoader = true;
    },
    [HIDE_LOADER]: (ui) => {
      ui.showLoader = false;
    },
    // Menu
    [TOGGLE_MENU]: (ui) => {
      ui.showMenu = !ui.showMenu;
    },
    [OPEN_MENU]: (ui) => {
      ui.showMenu = true;
    },
    [CLOSE_MENU]: (ui) => {
      ui.showMenu = false;
    },
    // Profile Panel
    [TOGGLE_PROFILE_PANEL]: (ui) => {
      ui.showProfilePanel = !ui.showprofilePanel;
    },
    [OPEN_PROFILE_PANEL]: (ui) => {
      ui.showProfilePanel = true;
    },
    [CLOSE_PROFILE_PANEL]: (ui) => {
      ui.showProfilePanel = false;
    },
    // Theming
    [SET_THEME]: (ui, { theme }) => {
      ui.theme = theme;
    },
  },
  initialState,
);

export default uiReducer;

// Selectors
export const getTheme = ({ ui }) => ui.theme;

export const getMenuState = ({ ui }) => ui.showMenu;

export const getprofilePanelState = ({ ui }) => ui.showProfilePanel;

export const getLoaderState = ({ ui }) => ui.showLoader;
