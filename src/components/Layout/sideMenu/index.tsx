import React from "react";
import { FlexRow, SideMenuContainer } from "../../../style";
import data from "../../../sidebarData";
import briefCase from "../../../assets/sideMenu/organization.svg";
import arrowDown from "../../../assets/sideMenu/arrowDown.svg";
import { Link, NavLink } from "react-router-dom";
import AppContext from "../../../context";
import "./index.scss";
import logOut from "../../../assets/sideMenu/log-out.svg";

const SideMenu: React.FC = (): React.ReactElement => {
  const [isActive, setIsActive] = React.useState<string>("");
  const { active, setActive } = React.useContext(AppContext);
  const handleActive = (prop: string): void => {
    setIsActive(prop);
  };

  const wrapperRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    function handleClickOutside(e) {
      e.preventDefault();
      if (wrapperRef.current) {
        if (!wrapperRef.current.contains(e.target) && active) {
          console.log("you clicked inside of the sidebar");
          if (active) setActive(false);
        }
      }
    }
    // Attach event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <SideMenuContainer
      open={active}
      className="sidemenu_container"
      ref={wrapperRef}
    >
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

      <Link className="nav_link_btn" to="/dashboard">
        <FlexRow
          gap="1"
          cursor="pointer"
          justifyContent="flex-start"
          leftPadding="1.5"
          rightPadding="1"
          className="nav_link_btn"
          onClick={() => setActive(false)}
        >
          <img
            src={briefCase}
            alt="Switch_organization"
            height="16px"
            width="16px"
          />

          <p>Dashboard</p>
        </FlexRow>
      </Link>

      {data?.map((item, index) => (
        <React.Fragment>
          <div className="nav_link_title" key={index}>
            <p className="nav_link_txt">{item?.title}</p>
          </div>

          {item?.meta_data.map((itm) => (
            <Link to={itm?.href}>
              <FlexRow
                onClick={() => {
                  handleActive(itm?.text);
                  setActive(false);
                }}
                gap="1"
                cursor="pointer"
                justifyContent="flex-start"
                leftPadding="1.5"
                rightPadding="1"
                className={`nav_link_btn ${
                  isActive === itm?.text ? "active" : ""
                }`}
              >
                <img
                  src={itm?.iconSrc}
                  alt={itm?.text}
                  height="16px"
                  width="16px"
                />

                <p className="nav_link_txt">{itm?.text}</p>
              </FlexRow>
            </Link>
          ))}
        </React.Fragment>
      ))}

      <div className="divider-x"></div>
      <FlexRow
        justifyContent="flex-start"
        gap="1"
        leftPadding="1"
        className="nav_link_btn"
      >
        <img src={logOut} width="16px" height="16px" />
        <p>Logout</p>
      </FlexRow>

      <p className="version">V1.2.0</p>
    </SideMenuContainer>
  );
};

export default SideMenu;
