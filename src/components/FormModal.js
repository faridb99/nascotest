import React from "react";
import "./FormModal.css";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { setFormData, setEmployees } from "../actions";

//FORMMODAL
/*
  This modal is used to display the add/edit user screen.
 */

const FormModal = (props) => {
  /*
  Here we initialize a constant that will hold the employees data found in redux and a constant to hold the form data.
  */
  const employees = useSelector((state) => state.employees);
  const formData = useSelector((state) => state.formData);

  const dispatch = useDispatch();

  /*
  Function to reset Form Data to blanks.
  */
  const resetFormData = () => {
    dispatch(
      setFormData({
        fullName: "",
        jobTitle: "",
        department: "",
        location: "",
      })
    );
  };

  /*
  Function to handle change in Form Data.
  1. We get the attribute that is being modified with the event
  2. We get the value it is being modified to
  3  We update the Form Data with dispatch
  */
  const formChangeHandler = (event) => {
    event.preventDefault();

    const inputFieldName = event.target.getAttribute("name");
    console.log(event.target);
    const inputFieldValue = event.target.value;

    const newFormData = { ...formData };

    newFormData[inputFieldName] = inputFieldValue;

    dispatch(setFormData(newFormData));
  };

  /*
  Function to handle submission of Form Data.
  1. We check whether the form to be submited is and add or edit form
  2. If it is an add form we create a new employee and add him to employees data
  3. Else we find the index of the employee we want to edit with this Id and replaces the employee with the same employee with new data 
  */

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (props.title === "Add Employee") {
      const newEmployee = {
        id: nanoid(),
        fullName: formData.fullName,
        jobTitle: formData.jobTitle,
        department: formData.department,
        location: formData.location,
      };

      const newEmployees = [...employees, newEmployee];

      dispatch(setEmployees(newEmployees));
    } else {
      const editedEmployee = {
        id: props.editEmployeeId,
        fullName: formData.fullName,
        jobTitle: formData.jobTitle,
        department: formData.department,
        location: formData.location,
      };
      const newEmployees = [...employees];

      const index = employees.findIndex(
        (employee) => (employee.id = props.editEmployeeId)
      );
      newEmployees[index] = editedEmployee;
      dispatch(setEmployees(newEmployees));
      props.resetEditEmployeeId();
    }
    resetFormData();
    props.closeModal();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="body">
          <form id="employee-information-form" onSubmit={formSubmissionHandler}>
            <div className="formContainer">
              <div>
                <text>Name:</text>
                <input
                  type="text"
                  name="fullName"
                  required="required"
                  placeholder="Enter Name"
                  value={formData.fullName}
                  onChange={formChangeHandler}
                ></input>
              </div>
              <div>
                <text>Job Title:</text>
                <input
                  type="text"
                  name="jobTitle"
                  required="required"
                  placeholder="Enter Job Title"
                  value={formData.jobTitle}
                  onChange={formChangeHandler}
                ></input>
              </div>
              <div>
                <text>Department:</text>
                <select
                  required
                  name="department"
                  placeholder="Enter Department"
                  value={formData.department}
                  onChange={formChangeHandler}
                >
                  <option value="Tech">Tech</option>
                  <option value="Business">Business</option>
                  <option value="Operations">Operations</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
              <div>
                <text>Country:</text>
                <select
                  required
                  name="location"
                  value={formData.location}
                  onChange={formChangeHandler}
                >
                  <option value="France">France</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="footer">
          <button
            id="cancelBtn"
            onClick={() => {
              props.closeModal();
              resetFormData();
            }}
          >
            Cancel
          </button>
          <button form="employee-information-form" type="submit">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
