import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tableColumns } from "./tableDetails";
import { tableRow } from "../../functions/handleData";
import { useSelector } from "react-redux";

const DataTable = () => {
  const { savedData } = useSelector((state) => state.dataSlice);

  return (
    <div style={{ height: 640, width: "100%" }}>
      <DataGrid
        rows={tableRow(savedData)}
        columns={tableColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};
export default DataTable;
