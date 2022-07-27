import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import { COLUMNS } from "./columns";
import { useSelector } from "react-redux";
import { GlobalFilter } from "./Globalfilter";

export const FilteringTable = (props) => {
  const employees = useSelector((state) => state.employees);

  const data = useMemo(() => employees, []);
  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable(
    { columns: columns, data: data },

    useGlobalFilter
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;
  return (
    <>
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
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    </>
  );
};
