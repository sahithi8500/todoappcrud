
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
    todoReducer:todoReducer
  });
const store = createStore(rootReducer, (applyMiddleware(thunk)));

export default store;