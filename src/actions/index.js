export const setEmployees = (employees) => {
  return {
    type: "SETEMPLOYEES",
    payload: employees,
  };
};

export const setFormData = (formData) => {
  return {
    type: "SETFORMDATA",
    payload: formData,
  };
};
