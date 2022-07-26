const addFormDataReducer = (
  state = {
    fullName: "",
    jobTitle: "",
    department: "",
    location: "",
  },
  action
) => {
  switch (action.type) {
    case "SETADDFORMDATA":
      return action.payload;

    default:
      return state;
  }
};

export default addFormDataReducer;
