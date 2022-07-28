import employeesReducer from "./employees";
import { combineReducers } from "redux";
import formDataReducer from "./formData";

/* ROOT REDUCER */

/* Comibine Reducers to insert in createStore in index.js */
const rootReducer = combineReducers({
  employees: employeesReducer,
  formData: formDataReducer,
});

export default rootReducer;
