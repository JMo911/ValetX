import React, { Component } from "react";
import "./style.css";
import LoginCard from "../loginCard";
import LogoButton from "../logoButton";
import ViewLogin from "../view-login";
import { Link } from "react-router-dom";
import StatusNumberCheckmarkPaid from "../status-number-checkmark-paid";
import PayButton from "../paybutton";
import PayNowForm from "../paynowform";
import AddNewCardForm from "../addnewcardform";
import PickUpButtonYellow from "../pickupbutton-yellow";

class DashboardPaidPage extends Component {

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
        <Link to="/">
            <LogoButton></LogoButton>
        </Link>
        <ViewLogin>
          <StatusNumberCheckmarkPaid></StatusNumberCheckmarkPaid>
          <PayButton><PayNowForm><AddNewCardForm></AddNewCardForm></PayNowForm></PayButton>
          <PickUpButtonYellow></PickUpButtonYellow>
        </ViewLogin>
      </LoginCard>
    );
  }
}

export default DashboardPaidPage;