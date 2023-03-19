import React from "react";
import {
  ScreenContainer,
  FlexRow,
  FlexColumn,
  CustomContainer,
  TextInput,
  Button,
} from "../../style";
import lendsqr_logo from "../../assets/logo.svg";
import login_img from "../../assets/pablo-sign-in 1.svg";
import "./index.scss";

const SignIn: React.FC = () => {
  return (
    <CustomContainer className="signIn">
      <FlexColumn width="50" padding="0 2" height="100" className="row_1">
        <div className="logo-container">
          <img
            src={lendsqr_logo}
            alt="lendsqr_logo"
            height="36px"
            width="173.76px"
          />
        </div>

        <div className="login">
          <img src={login_img} alt="login_image" className="login_image" />
        </div>
      </FlexColumn>

      <FlexColumn width="50" padding="0 5" height="100" className="row_2">
        <div className="logo_container">
          <img
            src={lendsqr_logo}
            alt="lendsqr_logo"
            height="36px"
            width="173.76px"
          />
        </div>
        <h1 className="login_header">Welcome!</h1>
        <p className="login_desc">Enter details login.</p>

        <form className="form">
          <TextInput padding="1" bottomMargin="2">
            <input type="text" placeholder="Email" />
          </TextInput>

          <TextInput padding="1">
            <input type="password" placeholder="Password" />
          </TextInput>

          <p className="fgt_pass">FORGOT PASWORD?</p>

          <Button topMargin="1" size="16px">
            LOG IN
          </Button>
        </form>
      </FlexColumn>
    </CustomContainer>
  );
};

export default SignIn;