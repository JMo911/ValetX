import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import ArrivedViewForm from "../arrived-view-form";

class ArrivedView extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <ArrivedViewForm></ArrivedViewForm>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default ArrivedView;