const STATE = 'state';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE, serializedState);
  } catch (err) {
    // no error
  }
};

const clearState = () => {
  localStorage.removeItem(STATE);
};

export {
  clearState,
  loadState,
  saveState,
};
