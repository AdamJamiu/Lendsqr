import React from "react";
import gear from "../../assets/gear.svg";
import "./index.scss";

const LoadingGear: React.FC = () => {
  return (
    <div className="loading_container">
      <img src={gear} alt="loading__gear" height="34px" width="34px" />
    </div>
  );
};

export default LoadingGear;