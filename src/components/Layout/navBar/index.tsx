import React from "react";
import logo from "../../../assets/logo.svg";
import { Avatar, FlexRow, SearchInput } from "../../../style";
import "./index.scss";
import searchIcon from "../../../assets/navbar/search.svg";
// import notification from "../../../assets/navbar/notification.svg";
import userImage from "../../../assets/navbar/user.svg";
import arrowDown from "../../../assets/navbar/arrowDown.svg";
// import menuIcon from "../../../assets/navbar/menu-icon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AppContext from "../../../context";

const NavBar: React.FC = (): React.ReactElement => {
  const { setActive } = React.useContext(AppContext);

  return (
    <nav className="navbar">
      <IconButton className="menu_icon" onClick={() => setActive(true)}>
        <MenuOutlinedIcon
          fontSize="small"
          sx={{ color: "var(--tertiary--color)" }}
        />
      </IconButton>

      <a href="/" className="navbar__logo">
        <img src={logo} width="144.8px" height="30px" />
      </a>

      <SearchInput width="400" sizeUnit="px">
        <input placeholder="Search for anything" type="search" />
        <div>
          <img src={searchIcon} alt="search" width="13.9px" height="14px" />
        </div>
      </SearchInput>

      <FlexRow
        gap="2"
        width="fit-content"
        leftPadding="1"
        rightPadding="1"
        className="nav_action_btns"
      >
        <p className="nav_link">Docs</p>

        <IconButton>
          <NotificationsOutlinedIcon fontSize="medium" />
        </IconButton>

        <FlexRow gap="1" width="fit-content">
          <Avatar>
            <img src={userImage} alt="user_image" height="60px" width="48px" />
          </Avatar>

          <p className="nav_link">Adedeji</p>

          <img
            src={arrowDown}
            alt="arrow_down"
            width="10.34px"
            height="7.15px"
            className="arrow_down"
          />
        </FlexRow>
      </FlexRow>

      <IconButton className="more_icon">
        <MoreVertIcon fontSize="small" />
      </IconButton>
    </nav>
  );
};

export default NavBar;
