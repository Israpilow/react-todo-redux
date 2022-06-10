import axios from 'axios';

export const setLists = (lists) => ({
  type: 'SET_LISTS',
  payload: lists,
});

export const setTasks = (lists) => ({
  type: 'SET_TASKS',
  payload: lists,
});

export const setAddList = (list) => ({
  type: 'SET_ADD_LIST',
  payload: list,
});

export const setRemoveList = (list) => ({
  type: 'SET_REMOVE_LIST',
  payload: list,
});

export const setActiveList = (list) => ({
  type: 'SET_ACTIVE_LIST',
  payload: list,
});

export const setEditList = (list) => ({
  type: 'SET_EDIT_LIST',
  payload: list,
});

export const setAddTask = (task) => ({
  type: 'SET_ADD_TASK',
  payload: task,
});

export const setRemoveTask = (task) => ({
  type: 'SET_REMOVE_TASK',
  payload: task,
});

export const setEditTask = (task) => ({
  type: 'SET_EDIT_TASK',
  payload: task,
});

export const fetchLists = (activeList) => (dispatch) => {
  axios.get('http://localhost:3001/lists?_expand=color&_embed=tasks').then(({ data }) => {
    dispatch(setLists(data));
    dispatch(setActiveList(data));
    dispatch(setEditList(data));
  });
};
