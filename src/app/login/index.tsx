import React from "react";
import { FlexColumn, CustomContainer, TextInput, Button } from "../../style";
import lendsqr_logo from "../../assets/logo.svg";
import login_img from "../../assets/pablo-sign-in 1.svg";
import "./index.scss";
import { Navigate, useNavigate } from "react-router-dom";

export const SignIn: React.FC = (): React.ReactElement => {
  const [isPassType, setIsPassType] = React.useState<string>("password");
  document.title = "Lendsqr | Login";

  // const navigate = useNavigate();

  //   toggle password type
  const togglePassword = (): void => {
    if (isPassType === "password") {
      setIsPassType("text");
    } else {
      setIsPassType("password");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Navigate("/dashboard");
    document.location.href = "/dashboard";
  };

  return (
    <CustomContainer className="signIn" data-testid="login">
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
        <h1 className="login_header">Welcome!</h1>
        <p className="login_desc">Enter details login.</p>

        <form className="form" onSubmit={handleSubmit}>
          <TextInput
            borderWidth="2"
            // rightPadding="1"
            // leftPadding="1"
            bottomPadding="1"
            topPadding="1"
            bottomMargin="2"
          >
            <input
              required
              data-testid="email-field"
              type="email"
              placeholder="Email"
            />
          </TextInput>

          <TextInput
            bottomPadding="1"
            topPadding="1"
            borderWidth="2"
            padding="1"
          >
            <input
              type={isPassType}
              data-testid="password-field"
              required
              placeholder="Password"
            />
            <p onClick={togglePassword} className="txt_secondary">
              SHOW
            </p>
          </TextInput>

          <p className="fgt_pass">FORGOT PASWORD?</p>

          <Button topMargin="1" size="14px" type="submit">
            LOG IN
          </Button>
        </form>
      </FlexColumn>
    </CustomContainer>
  );
};

export default SignIn;
