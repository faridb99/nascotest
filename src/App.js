import { nanoid } from "nanoid";
import EmployeeRow from "./components/EmployeeRow";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./App.css";
import FormModal from "./components/FormModal";
import { setAddFormData, setEmployees } from "./actions";

function App() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [modalTitle, setModalTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      {openModal && (
        <FormModal
          title={modalTitle}
          closeModal={() => setOpenModal(false)}
        ></FormModal>
      )}
      <button
        onClick={() => {
          setModalTitle("Add Employee");
          setOpenModal(true);
        }}
      >
        Add Employee
      </button>
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
