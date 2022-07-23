import logo from "./logo.svg";
import data from "./mock-data.json";
import { useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState(data);

  return (
    <div className="App">
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
          {employees.map((contact) => (
            <tr>
              <td>{contact.fullname}</td>
              <td>{contact.jobtitle}</td>
              <td>{contact.department}</td>
              <td>{contact.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
