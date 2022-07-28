import React from "react";
import "./EditingTable.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setEmployees, setFormData } from "../actions";
import FormModal from "./FormModal";
import EmployeeRow from "./EmployeeRow";

//EDITING TABLE
/*
    This table is used to add/edit and delete employees.
 */

const EditingTable = () => {
  /*
  Here we initialize a constant that will hold the employees data found in redux.
  We initialize the dispatch constant to be able to dispatch Actions to the reducer.
  */
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  /*
  We initialize different states:
  - modalTitle to track which button was pressed between Add and Edit and display the corresponding title in FormModal.
  - openModal to set Modal as open or closed.
  - editEmployeeId to track which employee we want to edit and save the id for use in handler.
  */
  const [modalTitle, setModalTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  /*
  handleAddClick: Handles Clicking on the Add Employee button. Send corresponding Title to Modal than open it
  */
  const handleAddClick = () => {
    setModalTitle("Add Employee");
    setOpenModal(true);
  };

  /*
  handleDeleteClick: Handles Clicking on the Delete button. 
    1. Find index in list of employee with id we want to delete 
    2. Delete entry at index
    3. Update Employees data 
  */
  const handleDeleteClick = (employeeId) => {
    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.id === employeeId);

    newEmployees.splice(index, 1);

    dispatch(setEmployees(newEmployees));
  };

  /*
  handleEditClick: Handles Clicking on the Edit button. 
    1. Set editEmployeeId to the id of the employee we want to edit
    2. We set the value of the formData as the orginal values of the employee. 
    3. We open Modal
  */
  const handleEditClick = (event, employee) => {
    event.preventDefault();

    setEditEmployeeId(employee.id);
    setModalTitle("Edit Employee");

    const formValues = {
      fullName: employee.fullName,
      jobTitle: employee.jobTitle,
      department: employee.department,
      location: employee.location,
    };
    dispatch(setFormData(formValues));
    setOpenModal(true);
  };
  return (
    <div>
      {/*Modal will show when openModal=true */}
      {openModal && (
        <FormModal
          title={modalTitle}
          editEmployeeId={editEmployeeId}
          closeModal={() => setOpenModal(false)}
          resetEditEmployeeId={() => setEditEmployeeId(null)}
        ></FormModal>
      )}
      <div className="tableActionBar">
        <button onClick={handleAddClick}>Add Employee</button>
      </div>
      <div className="editingTableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Department</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/*We create a EmployeeRow for every employee in Employees*/}
            {employees.map((employee) => (
              <EmployeeRow
                employee={employee}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              ></EmployeeRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EditingTable;
