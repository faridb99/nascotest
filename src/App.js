import EmployeeRow from "./components/EmployeeRow";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./App.css";
import FormModal from "./components/FormModal";
import { setEmployees, setFormData } from "./actions";

function App() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [modalTitle, setModalTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleAddClick = () => {
    setModalTitle("Add Employee");
    setOpenModal(true);
  };

  const handleDeleteClick = (employeeId) => {
    const newEmployees = [...employees];

    const index = employees.findIndex((employee) => employee.id === employeeId);

    newEmployees.splice(index, 1);

    dispatch(setEmployees(newEmployees));
  };

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
    <div className="App">
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
      <div>
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
}

export default App;
