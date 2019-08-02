export const OPEN_MENU = '[ui] - Open menu';
export const CLOSE_MENU = '[ui] - Close menu';
export const TOGGLE_MENU = '[ui] - Toggle menu';

export const openMenu = () => ({
  type: OPEN_MENU,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});
