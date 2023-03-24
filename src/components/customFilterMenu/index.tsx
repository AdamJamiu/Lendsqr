import React, { useState } from "react";
import Popover from "@mui/material/Popover";
// import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";
import { IconButton, TextField } from "@mui/material";
import "./index.scss";
import { OutlineButton, Button, TextInput } from "../../style";

const CustomFilterMenu: React.FC = ({ filterModel, e }): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const applyFilters = () => {
    // Apply filters here
    console.log(filterModel);
    handleClose();
  };

  return (
    <React.Fragment>
      <IconButton>
        <FilterListIcon onClick={handleClick} />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="popover_card">
          <div className="input_wrap">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" />
          </div>

          <div className="input_wrap">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="input_wrap">
            <label htmlFor="date">Date</label>
            <input type="date" placeholder="Date" />
          </div>

          <div className="input_wrap">
            <label htmlFor="phone">Phone</label>
            <input type="number" name="phone" placeholder="Phone" />
          </div>

          <div className="input_wrap">
            <label>Status</label>
            <select name="status" placeholder="select">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="blacklisted">Blacklisted</option>
            </select>
          </div>

          {/* Add filter UI elements here */}
          <div className="btn_wrap">
            <OutlineButton width="100" sizeUnit="%" onClick={handleClose}>
              Reset
            </OutlineButton>
            <Button width="100" sizeUnit="%" onClick={applyFilters}>
              Filter
            </Button>
          </div>
        </div>
      </Popover>
    </React.Fragment>
  );
};

export default CustomFilterMenu;
