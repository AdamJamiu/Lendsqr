import React from "react";
import { FlexRow, SideMenuContainer } from "../../../style";
import data from "../../../sidebarData";
import briefCase from "../../../assets/sideMenu/organization.svg";
import arrowDown from "../../../assets/sideMenu/arrowDown.svg";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

const SideMenu: React.FC = (): React.ReactElement => {
  const [isActive, setIsActive] = React.useState<string>("");
  const handleActive = (prop: string): void => {
    setIsActive(prop);
  };

  return (
    <SideMenuContainer className="sidemenu_container">
      <FlexRow
        gap="1"
        cursor="pointer"
        justifyContent="flex-start"
        leftPadding="1"
        rightPadding="1"
      >
        <img
          src={briefCase}
          alt="Switch_organization"
          height="16px"
          width="16px"
        />

        <p className="side_active_link">Swicth Organization</p>

        <img src={arrowDown} height="12px" width="12px" />
      </FlexRow>

      <NavLink className="nav_link_btn" to="/dashboard">
        <FlexRow
          gap="1"
          cursor="pointer"
          justifyContent="flex-start"
          leftPadding="1"
          rightPadding="1"
          // className="nav_link_btn"
        >
          <img
            src={briefCase}
            alt="Switch_organization"
            height="16px"
            width="16px"
          />

          <p className="nav_link_txt">Dashboard</p>
        </FlexRow>
      </NavLink>

      {data.map((item, index) => (
        <React.Fragment>
          <div className="nav_link_btn" key={index}>
            <p className="nav_link_txt">{item.title}</p>
          </div>

          {item.meta_data.map((itm) => (
            <NavLink className="nav_link_btn" to={itm.href}>
              <FlexRow
                // onClick={() => handleActive(itm.text)}
                gap="1"
                cursor="pointer"
                justifyContent="flex-start"
                leftPadding="1"
                rightPadding="1"
                className="nav_link_btn"
              >
                <img
                  src={itm.iconSrc}
                  alt={itm.text}
                  height="16px"
                  width="16px"
                />

                <p className="nav_link_txt">{itm.text}</p>
              </FlexRow>
            </NavLink>
          ))}
        </React.Fragment>
      ))}
    </SideMenuContainer>
  );
};

export default SideMenu;
