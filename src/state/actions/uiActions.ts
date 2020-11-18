import { action } from 'lib/action';

export const setMenuOpen = () => action('SET_MENU_OPEN');
export const setMenuClosed = () => action('SET_MENU_CLOSED');

export default {
  setMenuOpen,
  setMenuClosed,
};
