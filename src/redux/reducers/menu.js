
/* eslint-disable */
import handleActions from '../handleActions';
import initialState from '../initialState';

const menuReducer = handleActions(
  {
    TOGGLE_MENU: (menu) => {
      menu.open = !menu.open;
    },
    OPEN_MENU: (menu) => {
      menu.open = true;
    },
    CLOSE_MENU: (menu) => {
      menu.open = false;
    },
  },
  initialState.menu,
);

export default menuReducer;

// Selectors

export const getMenuState = ({ menu }) => menu.open;

