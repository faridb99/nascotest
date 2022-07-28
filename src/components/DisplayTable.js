import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import { useSelector } from "react-redux";

/*
This Component was used for testing the add/edit and delete features in the table using react-table.
The functions were behaving oddly so divided into two tables for the project:
-Filtering Table that can filter and search and uses useTable
-Editing table that can edit the data
With more time would have merged into one table that uses useTable 
  */
export const DisplayTable = (props) => {
  const employees = useSelector((state) => state.employees);

  const columns = useMemo(() => COLUMNS, []);

  /*
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Action",
        Header: "Action",
        Cell: ({ cell }) => (
          <div className="actionButtonDiv">
            <button
              type="button"
              onClick={(event) =>
                props.handleEditClick(event, cell.row.original)
              }
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                props.handleDeleteClick(cell.row.original.id);
                console.log(cell.row.id);
              }}
            >
              Delete
            </button>
          </div>
        ),
      },
    ]);
  };
  */
  const tableInstance = useTable(
    { columns: columns, data: employees } /*,
    tableHooks*/
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
