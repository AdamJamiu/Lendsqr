import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import blackList from "../../assets/blacklist-user.svg";
import activeUser from "../../assets/activate-user.svg";
import viewDetails from "../../assets/view-details.svg";
import "./index.scss";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { useNavigate } from "react-router-dom";

const MenuIcon: React.FC = (id: any): React.ReactElement => {
  const { paramId } = React.useContext(AppContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={`/dashboard/users/${id.id}`}>
          <MenuItem onClick={handleClose}>
            <img src={viewDetails} alt="view" height="20px" width="20px" />
            <p className="menu_text">View Details</p>
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <img src={blackList} alt="blacklist" height="20px" width="20px" />
          <p className="menu_text">Blacklist User</p>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <img src={activeUser} alt="active" height="20px" width="20px" />
          <p className="menu_text">Ativate User</p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuIcon;
