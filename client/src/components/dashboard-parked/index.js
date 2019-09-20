import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import StatusNumberCheckmarkParked from "../status-number-checkmark-parked";
import Checkout from "../checkout";
import PickUpButton from "../pickupbutton";
import { withRouter } from 'react-router-dom';

class DashboardParkedPage extends Component {

  constructor(props){
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(event){
    if(event.keyCode === 27) {
      //Do whatever when esc is pressed
      const { history } = this.props;
      history.push(`/dashboard-pickup`);
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
        <Link to="/" onClick={this.routeChange}>
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <StatusNumberCheckmarkParked></StatusNumberCheckmarkParked>
          <Checkout></Checkout>
          <PickUpButton></PickUpButton>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default withRouter(DashboardParkedPage);