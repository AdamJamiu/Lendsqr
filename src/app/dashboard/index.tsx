import React from "react";
import NavBar from "../../components/Layout/navBar";
import SideMenu from "../../components/Layout/sideMenu";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = (): React.ReactElement => {
  document.title = "Lendsqr | Dashboard";
  return (
    <div className="dashboard_container">
      <NavBar />
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default Dashboard;
