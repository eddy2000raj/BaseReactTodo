import { ADD_TODO, TOGGLE_TODO, SET_FILTER,DELETE_TODO } from "./actionsTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = (id,content) => ({
  type: TOGGLE_TODO,
  payload: { id, content }
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: {id}
  });

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });