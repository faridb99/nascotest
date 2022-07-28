import data from "../mock-data.json";
/* EMPLOYEE REDUCERS */

/* Reducer to setEmployees data */
const employeesReducer = (state = data, action) => {
  switch (action.type) {
    case "SETEMPLOYEES":
      return action.payload;

    default:
      return state;
  }
};

export default employeesReducer;
