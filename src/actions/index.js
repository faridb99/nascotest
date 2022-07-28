//ACTIONS

/*ACTIONS related to EMPLOYEES*/

//Type to be evaluated by reducer, we pass it employees from redux
export const setEmployees = (employees) => {
  return {
    type: "SETEMPLOYEES",
    payload: employees,
  };
};

/*ACTIONS related to FORMDATA*/

//Type to be evaluated by reducer, we pass it formData from redux
export const setFormData = (formData) => {
  return {
    type: "SETFORMDATA",
    payload: formData,
  };
};
