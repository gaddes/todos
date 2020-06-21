import { createStore } from 'redux';
import rootReducer from './reducers';
import { data } from '../data';

export default createStore(
  rootReducer,
  data,
  // Required for devtools to work
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);