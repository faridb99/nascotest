import React from "react";
import "./GlobalFilter.css";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="globalFilter">
      Search :
      <input
        className="globalFilterInput"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Search All Columns..."
      ></input>
    </div>
  );
};
