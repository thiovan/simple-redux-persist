import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
  counter: CounterReducer,
  login: LoginReducer
});
