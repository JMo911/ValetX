import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import ValetParkForm from "../valet-park-form";

class ValetPark extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <ValetParkForm></ValetParkForm>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default ValetPark;