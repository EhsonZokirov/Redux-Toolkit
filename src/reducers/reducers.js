import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import todosReducer from "./Todos";
import tableReducer from "./Table";
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  table: tableReducer,
});
export default rootReducer;
