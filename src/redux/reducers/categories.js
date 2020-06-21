import { SET_FILTER } from '../actions';

export default (categories = {}, action) => {
  switch (action.type) {
    case SET_FILTER:
      const { value } = action.payload;
      if (!value) {
        return {
          ...categories,
          // Set all categories as visible
          visible: categories.all,
        };
      }
      return {
        ...categories,
        visible: [value],
      };
    default:
      return categories;
  }
};