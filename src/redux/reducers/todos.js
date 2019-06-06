/* eslint-disable */
import handleActions from '../handleActions';
import initialState from '../initialState';

const todosReducer = handleActions(
  {
    ADD_TODO: (todos, todo) => todos.push(todo),
    REMOVE_TODO: (todos, id) => todos.splice(todos.findIndex(t => t.id === id), 1),
    COMPLETE_TODO: (todos, id) => { todos[todos.findIndex(t => t.id === id)].complete = true; },
    UPDATE_TODO: (todos, { id, data }) => todos[todos.findIndex(t => t.id === id)] = data,
  },
  initialState.todos,
);

export default todosReducer;
