import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "./index.scss";
import useFetch from "../../../hooks/useFetch";
import MenuIcon from "../../menu";
import AppContext from "../../../context";
import CustomFilterMenu from "../../customFilterMenu";
import FilterListIcon from "@mui/icons-material/FilterList";

const generateStatus = () => {
  const values = ["Active", "Inactive", "Pending", "Blacklisted"];

  // Choose a random value from the array
  return values[Math.floor(Math.random() * values.length)];
};

const columns: GridColDef[] = [
  {
    field: "organization",
    headerName: "ORGANIZATION",
    width: 220,
    type: "string",
    hideSortIcons: true,
  },
  {
    field: "userName",
    headerName: "USERNAME",
    width: 135,
    type: "string",
    hideSortIcons: true,
  },
  {
    field: "email",
    headerName: "EMAIL",
    width: 240,
    type: "email",
    hideSortIcons: true,
    disableReorder: true,
  },
  {
    field: "phoneNumber",
    headerName: "PHONE NUMBER",
    type: "number",
    width: 170,
    disableReorder: true,
    hideSortIcons: true,
  },
  {
    field: "dateJoined",
    headerName: "DATE JOINED",
    type: "string",
    width: 190,
    hideSortIcons: true,
    disableReorder: true,
  },
  {
    field: "status",
    headerName: "STATUS",
    type: "string",
    width: 150,
    disableReorder: true,
    renderCell: (params) => (
      <div className={`${params.value}`}>
        <p>{params.value}</p>
      </div>
    ),
  },

  {
    field: "icon",
    headerName: "",
    width: 10,
    // @ts-ignore
    renderCell: (params) => <MenuIcon id={params.id.toString()} />,
  },
];

export default function DataTable() {
  const gridRef = React.useRef(null);
  const [myId, setMyId] = React.useState<string>("");
  const { setParamId } = React.useContext(AppContext);

  const { data } = useFetch();

  const getRows = data?.map((item: any) => {
    return {
      id: item.id,
      organization: item.orgName,
      userName: item.userName,
      email: item.email,
      phoneNumber: item.phoneNumber,
      dateJoined: new Date(item.createdAt),
      status: generateStatus(),
      icon: MenuIcon,
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
        ref={gridRef}
        rows={getRows}
        columns={columns}
        pageSizeOptions={[25]}
        disableColumnMenu={true}
        components={{
          ColumnHeaderFilterIconButton: CustomFilterMenu,
          ColumnMenuIcon: FilterListIcon,
        }}
        getRowClassName={(params) => `super-app-theme--${params.row.status}`}
        // onRowClick={(params) => setMyId(params.id)}
        sx={{
          border: "none",
          color: "var(--quaternary-color)",
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: "600 !important",
            fontSize: "12px !important",
            padding: "1em",
          },
        }}
      />
    </div>
  );
}
