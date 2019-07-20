const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';
const TOGGLE_MENU = 'TOGGLE_MENU';

export const openMenu = () => ({
  type: OPEN_MENU,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});
