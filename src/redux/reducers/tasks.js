import { ADD_TASK, SET_CHECKED } from '../actions';

export default (tasks = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      const { name, category } = action.payload;
      return [
        ...tasks,
        {
          name,
          checked: false, // Default when new task added
          category,
        },
      ];
    case SET_CHECKED:
      // Note: looping through each item in an array is inefficient
      //  and may be better done with object.id or JavaScript Set
      const newArray = tasks.map(task => {
        if (task.name === action.payload.name) {
          return {
            ...task,
            checked: action.payload.checked,
          };
        }
        return task;
      });
      return newArray;
    default:
      return tasks;
  }
};