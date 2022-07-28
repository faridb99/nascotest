/* FORMDATA REDUCERS */

/* Reducer to setEmployees data. Initially set to empty*/
const formDataReducer = (
  state = {
    fullName: "",
    jobTitle: "",
    department: "",
    location: "",
  },
  action
) => {
  switch (action.type) {
    case "SETFORMDATA":
      return action.payload;

    default:
      return state;
  }
};

export default formDataReducer;
