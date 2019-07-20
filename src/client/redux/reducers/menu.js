
/* eslint-disable */
import handleActions from '../handleActions';

export const initialState =  {
  open: false,
};

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
  initialState,
);

export default menuReducer;

// Selectors

export const getMenuState = ({ menu }) => menu.open;

