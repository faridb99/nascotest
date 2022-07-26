import React from "react";

const EmployeeRow = (props) => {
  return (
    <tr>
      <td>{props.employee.fullName}</td>
      <td>{props.employee.jobTitle}</td>
      <td>{props.employee.department}</td>
      <td>{props.employee.location}</td>
    </tr>
  );
};

export default EmployeeRow;
