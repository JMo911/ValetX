import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import StatusNumberCheckmarkInRoute from "../status-number-checkmark-inroute";
import EstWaitTime from "../est-wait-time";

class DashboardPickUpPage extends Component {

  constructor(props){
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(event){
    if(event.keyCode === 27) {
      //Do whatever when esc is pressed
      const { history } = this.props;
      history.push(`/arrived-view`);
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <LoginCard>
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <StatusNumberCheckmarkInRoute></StatusNumberCheckmarkInRoute>
          <EstWaitTime></EstWaitTime>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default DashboardPickUpPage;