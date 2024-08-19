// reducers/index.ts or reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import formReducer from '../Slice/FormSlice'; 

const rootReducer = combineReducers({
  form: formReducer,
  // Add other reducers here if necessary
});

export default rootReducer;
