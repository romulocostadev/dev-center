import { combineReducers } from 'redux';
import counterSlice from './solution/solutionSlice';
import authSlice from './auth/authSlice';
import modalSlice from './modal/modalSlice';
import { api } from '../services/solution';

const rootReducer = combineReducers({
  solutions: counterSlice,
  auth: authSlice,
  modal: modalSlice,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
