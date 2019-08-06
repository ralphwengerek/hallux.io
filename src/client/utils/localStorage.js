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

const loadToken = () => {
  try {
    const token = localStorage.getItem('id_token');
    if (token === null) {
      return undefined;
    }
    return token;
  } catch (err) {
    return undefined;
  }
};

const clearState = () => {
  localStorage.removeItem(STATE);
};

export {
  clearState,
  loadState,
  loadToken,
  saveState,
};
