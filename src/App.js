import logo from "./logo.svg";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import EmployeeRow from "./components/EmployeeRow";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./App.css";
import { setAddFormData, setEmployees } from "./actions";

function App() {
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
  };

  return (
    <div className="App">
      <h2>Add an Employee</h2>
      <form onSubmit={formSubmissionHandler}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter Name"
          onChange={formChangeHandler}
        ></input>
        <input
          type="text"
          name="jobTitle"
          required="required"
          placeholder="Enter Job Title"
          onChange={formChangeHandler}
        ></input>
        <input
          type="text"
          name="department"
          required="required"
          placeholder=" Enter Department"
          onChange={formChangeHandler}
        ></input>
        <input
          type="text"
          name="location"
          required="required"
          placeholder="Enter Country"
          onChange={formChangeHandler}
        ></input>
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Department</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeRow employee={employee}></EmployeeRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
