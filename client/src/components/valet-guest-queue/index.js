import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import GuestQueueForm from "../valet-guest-queue-form";

class GuestQueue extends Component {
  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <GuestQueueForm></GuestQueueForm>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default GuestQueue;