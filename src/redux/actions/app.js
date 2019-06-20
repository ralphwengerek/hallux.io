const OPEN_PROFILE_PANEL = 'OPEN_PROFILE_PANEL';
const CLOSE_PROFILE_PANEL = 'CLOSE_PROFILE_PANEL';
const TOGGLE_PROFILE_PANEL = 'TOGGLE_PROFILE_PANEL';

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
