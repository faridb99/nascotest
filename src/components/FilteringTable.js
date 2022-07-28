import React, { useMemo } from "react";
import "./FilteringTable.css";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { COLUMNS } from "./columns";
import { useSelector } from "react-redux";
import { GlobalFilter } from "./Globalfilter";

//FILTERING TABLE
/*
  This table is used to Filter and Search employees. Contains pagination as opposed to EditingTable
 */
export const FilteringTable = (props) => {
  /*
  Here we initialize a constant that will hold the employees data found in redux.
  */
  const employees = useSelector((state) => state.employees);

  const data = useMemo(() => employees, []);
  const columns = useMemo(() => COLUMNS, []);

  /*
  Here we use the useTable hook from react-table which is the primary hook to build a React Table. 
  It will serve as starting point for every option we want to add and plugin hooks that react table supports such as useGlobalFiltere,useSortBy...
  */
  const tableInstance = useTable(
    { columns: columns, data: data },

    useGlobalFilter,
    useSortBy,
    usePagination
  );

  /*
  Here we destructure the tableInstance into variables provided to us by react-table to use in our JSX code
  */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;
  return (
    <div className="filteringTableContainer">
      {/*Global Filter Used to search */}
      <div className="globalFilterContainer">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <table className="filteringTable" {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="headerContainer">
                    {column.render("Header")}
                    <button className="sortButton">Sort</button>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
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
      {/*Pagination Component Used to go to next/previous page */}
      <div className="paginationContainer">
        <button hidden={!canPreviousPage} onClick={() => previousPage()}>
          {"<"} Previous
        </button>
        <button hidden={!canNextPage} onClick={() => nextPage()}>
          Next {">"}
        </button>
      </div>
    </div>
  );
};
