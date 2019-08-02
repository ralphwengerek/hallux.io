export const OPEN_PROFILE_PANEL = '[ui] - Open profile panel';
export const CLOSE_PROFILE_PANEL = '[ui] - Close profile panel';
export const TOGGLE_PROFILE_PANEL = '[ui] - Toggle profile panel';

export const openProfilePanel = () => ({
  type: OPEN_PROFILE_PANEL,
  payload: null,
});

export const closeProfilePanel = () => ({
  type: CLOSE_PROFILE_PANEL,
  payload: null,
});

export const toggleProfilePanel = () => ({
  type: TOGGLE_PROFILE_PANEL,
  payload: null,
});
