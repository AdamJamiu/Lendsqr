import React from "react";
import { ContentContainer } from "../../style";
import UserCard from "./userCard";

import "./index.scss";
import DataTable from "./dataTable";

const User: React.FC = (): React.ReactElement => {
  return (
    <ContentContainer>
      <div className="container">
        <h2 className="content_title">Users</h2>

        <UserCard />
        <DataTable />
      </div>
    </ContentContainer>
  );
};

export default User;
