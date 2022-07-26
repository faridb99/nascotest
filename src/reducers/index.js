import employeesReducer from "./employees";
import { combineReducers } from "redux";
import addFormDataReducer from "./addFormData";

const rootReducer = combineReducers({
  employees: employeesReducer,
  addFormData: addFormDataReducer,
});

export default rootReducer;
