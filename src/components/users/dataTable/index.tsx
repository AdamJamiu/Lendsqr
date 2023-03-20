import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "./index.scss";
import useFetch from "../../../hooks/useFetch";

const columns: GridColDef[] = [
  {
    field: "organization",
    headerName: "ORGANIZATION",
    width: 220,
    type: "string",
  },
  { field: "userName", headerName: "USERNAME", width: 135, type: "string" },
  { field: "email", headerName: "EMAIL", width: 240, type: "email" },
  {
    field: "phoneNumber",
    headerName: "PHONE NUMBER",
    type: "number",
    width: 170,
  },
  {
    field: "dateJoined",
    headerName: "DATE JOINED",
    type: "string",
    width: 150,
  },
  {
    field: "status",
    headerName: "STATUS",
    type: "string",
    width: 60,
  },
  //   {
  //     field: "userNames",
  //     headerName: "USERNAME",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params: GridValueGetterParams) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
];

export default function DataTable() {
  const { data } = useFetch();

  const getRows = data?.map((item: any) => {
    return {
      id: item.id,
      organization: item.orgName,
      userName: item.userName,
      email: item.email,
      phoneNumber: item.phoneNumber,
      dateJoined: new Date(item.createdAt),
      status: item.employmentStatus,
    };
  });

  return (
    <div
      style={{
        height: 500,
        width: "100%",
        background: "#fff",
      }}
      className="table_container"
    >
      <DataGrid
        rows={getRows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        sx={{
          border: "none",
          color: "var(--quaternary-color)",
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: "600 !important",
            fontSize: "14px !important",
          },
        }}
      />
    </div>
  );
}
