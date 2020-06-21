// Action TYPES

export const ADD_TASK = 'ADD_TASK';
export const SET_CHECKED = 'SET_CHECKED';
export const SET_FILTER = 'SET_FILTER';

// Action CREATORS

export const addTask = payload => ({
  type: ADD_TASK,
  payload,
});

export const setChecked = payload => ({
  type: SET_CHECKED,
  payload, // payload.name must be unique (not suitable for 'real world' app)
});

export const setFilter = payload => ({
  type: SET_FILTER,
  payload,
});