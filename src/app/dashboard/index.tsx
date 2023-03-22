import React from "react";
import NavBar from "../../components/Layout/navBar";
import SideMenu from "../../components/Layout/sideMenu";
import { Outlet } from "react-router-dom";
import AppContext from "../../context";
import "./index.scss";

const Dashboard: React.FC = (): React.ReactElement => {
  const { active } = React.useContext(AppContext);
  document.title = "Lendsqr | Dashboard";

  return (
    <div className={`dashboard_container ${active ? "show-overlay" : ""}`}>
      <NavBar />
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default Dashboard;
