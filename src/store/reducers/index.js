import { combineReducers } from 'redux';

// import authReducer from './authReducer';
// import errorReducer from './errorReducer';
import examReducer from './examReducer';
import teacherReducer from './teacherReducer';
import stateReducer from './stateReducer';

export default combineReducers({
  stateReducer,
  examReducer,
  teacherReducer,
});
