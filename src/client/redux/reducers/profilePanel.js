/* eslint-disable */
import handleActions from '../handleActions';

export const initialState = {
  open: false,
};

const profilePanelReducer = handleActions(
  {
    TOGGLE_PROFILE_PANEL: (profilePanel) => {
      profilePanel.open = !profilePanel.showprofilePanel;
    },
    OPEN_PROFILE_PANEL: (profilePanel) => {
      profilePanel.open = true;
    },
    CLOSE_PROFILE_PANEL: (profilePanel) => {
      profilePanel.open = false;
    },
  },
  initialState,
);

export default profilePanelReducer;

// Selectors

export const getprofilePanelState = ({ profilePanel }) => profilePanel.open;
