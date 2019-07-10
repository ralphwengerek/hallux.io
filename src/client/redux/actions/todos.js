const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  payload: todo,
});
