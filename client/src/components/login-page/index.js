import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import GuestLoginButton from "../guestloginbutton";
import GuestLoginForm from "../guestloginform";
import GuestRegistrationButton from "../guestregistrationbutton";
import GuestRegistrationForm from "../guestregistrationform";
import ValetDriverButton from "../valetdriverbutton";
import ValetLoginForm from "../valetLoginForm";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <div className="homeButtons">
            <GuestLoginButton><GuestLoginForm></GuestLoginForm></GuestLoginButton>
            <ValetDriverButton><ValetLoginForm></ValetLoginForm></ValetDriverButton>
            <GuestRegistrationButton><GuestRegistrationForm></GuestRegistrationForm></GuestRegistrationButton>
          </div>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default LoginPage;