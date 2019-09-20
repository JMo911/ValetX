import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import StatusNumberCheckmark from "../status-number-checkmark";
import PayButtonGrey from "../paybutton";
import PayNowForm from "../paynowform";
import AddNewCardForm from "../addnewcardform";
import PickUpButton from "../pickupbutton";

class DashboardPage extends Component {
  

  constructor(props){
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }
  escFunction(event){
    if(event.keyCode === 27) {
      //Do whatever when esc is pressed
      const { history } = this.props;
      history.push(`/dashboard-parked`);
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
          <StatusNumberCheckmark></StatusNumberCheckmark>
          <PayButtonGrey><PayNowForm><AddNewCardForm></AddNewCardForm></PayNowForm></PayButtonGrey>
          <PickUpButton></PickUpButton>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default DashboardPage;