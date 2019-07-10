/* eslint-disable */
import handleActions from '../handleActions';
import initialState from '../initialState';

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
  initialState.profilePanel,
);

export default profilePanelReducer;

// Selectors

export const getprofilePanelState = ({ profilePanel }) => profilePanel.open;
