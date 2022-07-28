/*
  Data that is used to display FilteringTable:
  -Header will be in the <th></th> component
  -accessor is the same as attribute in mock-data we want to access and put in corresponding column.
*/
export const COLUMNS = [
  {
    Header: "Name",
    accessor: "fullName",
  },
  {
    Header: "Job Title",
    accessor: "jobTitle",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Location",
    accessor: "location",
  },
];
