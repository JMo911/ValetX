import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import ValetHomeForm from "../valet-home-form";

class ValetHomePage extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <ValetHomeForm></ValetHomeForm>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default ValetHomePage;