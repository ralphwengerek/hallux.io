/* eslint-disable no-unused-expressions */
import produce from 'immer';

const handleActions = (actionsMap, defaultState) => (
  state = defaultState,
  { type, payload },
) => produce(state, (draft) => {
  const action = actionsMap[type];
  action && action(draft, payload);
});

export default handleActions;
