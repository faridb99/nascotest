export const setEmployees = (employees) => {
  return {
    type: "SETEMPLOYEES",
    payload: employees,
  };
};

export const setAddFormData = (addFormData) => {
  return {
    type: "SETADDFORMDATA",
    payload: addFormData,
  };
};
