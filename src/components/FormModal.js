import React from "react";
import "./FormModal.css";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { setAddFormData, setEmployees } from "../actions";

const FormModal = (props) => {
  const employees = useSelector((state) => state.employees);
  const addFormData = useSelector((state) => state.addFormData);

  const dispatch = useDispatch();

  const formChangeHandler = (event) => {
    event.preventDefault();

    const inputFieldName = event.target.getAttribute("name");
    const inputFieldValue = event.target.value;

    const newFormData = { ...addFormData };

    newFormData[inputFieldName] = inputFieldValue;

    dispatch(setAddFormData(newFormData));
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const newEmployee = {
      id: nanoid(),
      fullName: addFormData.fullName,
      jobTitle: addFormData.jobTitle,
      department: addFormData.department,
      location: addFormData.location,
    };

    const newEmployees = [...employees, newEmployee];

    dispatch(setEmployees(newEmployees));
    props.closeModal(false);
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
                <text>hi:</text>
                <input
                  type="text"
                  name="fullName"
                  required="required"
                  placeholder="Enter Name"
                  onChange={formChangeHandler}
                ></input>
              </div>
              <div>
                <text>hi:</text>
                <input
                  type="text"
                  name="jobTitle"
                  required="required"
                  placeholder="Enter Job Title"
                  onChange={formChangeHandler}
                ></input>
              </div>
              <div>
                <text>hi:</text>
                <input
                  type="text"
                  name="department"
                  required="required"
                  placeholder=" Enter Department"
                  onChange={formChangeHandler}
                ></input>
              </div>
              <div>
                <text>hi:</text>
                <input
                  type="text"
                  name="location"
                  required="required"
                  placeholder="Enter Country"
                  onChange={formChangeHandler}
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => props.closeModal(false)}>
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
