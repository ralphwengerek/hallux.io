const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';
const TOGGLE_MENU = 'TOGGLE_MENU';

export const openMenu = () => ({
  type: OPEN_MENU,
  payload: null,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
  payload: null,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
  payload: null,
});
