import employeesReducer from "./employees";
import { combineReducers } from "redux";
import formDataReducer from "./formData";

const rootReducer = combineReducers({
  employees: employeesReducer,
  formData: formDataReducer,
});

export default rootReducer;
