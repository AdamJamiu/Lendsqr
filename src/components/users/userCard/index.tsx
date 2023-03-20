import React from "react";
import userImg from "../../../assets/users/user.svg";
import activeUser from "../../../assets/users/users-active.svg";
import userWithLoan from "../../../assets/users/user-with-loans.svg";
import userWithSavings from "../../../assets/users/user-group.svg";

import "./index.scss";

const UserCard: React.FC = (): React.ReactElement => {
  return (
    <div className="user_card_container">
      <div className="user_card_row">
        <div className="user_card_avatar card_1">
          <img src={userImg} alt="user_img" height="24px" width="24px" />
        </div>
        <p className="user_card_name">Users</p>
        <p className="user_card_number">2, 453</p>
      </div>

      <div className="user_card_row">
        <div className="user_card_avatar card_2">
          <img src={activeUser} alt="user_img" height="24px" width="24px" />
        </div>
        <p className="user_card_name">ACTIVE USERS</p>
        <p className="user_card_number">2,453</p>
      </div>

      <div className="user_card_row">
        <div className="user_card_avatar card_3">
          <img src={userWithLoan} alt="user_img" height="24px" width="24px" />
        </div>
        <p className="user_card_name">USER WITH LOANS</p>
        <p className="user_card_number">12,453</p>
      </div>

      <div className="user_card_row">
        <div className="user_card_avatar card_4">
          <img
            src={userWithSavings}
            alt="user_img"
            height="24px"
            width="24px"
          />
        </div>
        <p className="user_card_name">USER WITH SAVINGS</p>
        <p className="user_card_number">102,453</p>
      </div>
    </div>
  );
};

export default UserCard;
