import React from "react";
import "./FormModal.css";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { setFormData, setEmployees } from "../actions";

const FormModal = (props) => {
  const employees = useSelector((state) => state.employees);
  const formData = useSelector((state) => state.formData);

  const dispatch = useDispatch();

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

  const formChangeHandler = (event) => {
    event.preventDefault();

    const inputFieldName = event.target.getAttribute("name");
    const inputFieldValue = event.target.value;

    const newFormData = { ...formData };

    newFormData[inputFieldName] = inputFieldValue;

    dispatch(setFormData(newFormData));
  };

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
                <input
                  type="text"
                  name="department"
                  required="required"
                  placeholder=" Enter Department"
                  value={formData.department}
                  onChange={formChangeHandler}
                ></input>
              </div>
              <div>
                <text>Country:</text>
                <input
                  type="text"
                  name="location"
                  required="required"
                  value={formData.location}
                  placeholder="Enter Country"
                  onChange={formChangeHandler}
                ></input>
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
