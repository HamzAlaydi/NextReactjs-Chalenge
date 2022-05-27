export const tableColumns = [
  { field: "id", headerName: "Log ID", width: 200 },
  { field: "applicationType", headerName: "Application Type", width: 250 },
  { field: "applicationId", headerName: "Application ID", width: 250 },
  {
    field: "action",
    headerName: "Action",
    width: 250,
  },
  {
    field: "actionDetails",
    headerName: "Action Details",
    description: "This column has a value getter and is not sortable.",
    width: 230,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "date",
    headerName: "Date : Time",
    width: 250,
  },
];
