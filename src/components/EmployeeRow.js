import React from "react";

const EmployeeRow = (props) => {
  return (
    <tr>
      <td>{props.employee.fullName}</td>
      <td>{props.employee.jobTitle}</td>
      <td>{props.employee.department}</td>
      <td>{props.employee.location}</td>
      <td>
        <div className="actionButtonDiv">
          <button
            type="button"
            onClick={(event) => props.handleEditClick(event, props.employee)}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => props.handleDeleteClick(props.employee.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
