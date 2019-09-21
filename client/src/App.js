import React, { Component } from "react";
import jwt from 'jsonwebtoken';
// import dotEnv from 'dotenv';
// dotEnv.config();
import "./App.css";
import LoginForm from './components/LoginForm';
import LoginPage from "../src/components/login-page";
import UserRegistrationForm from "./components/UserRegistrationForm";
import DashboardPage from "../src/components/dashboard-page";
import DashboardPaidPage from "../src/components/dashboard-paid";
import DashboardParkedPage from "../src/components/dashboard-parked";
import DashboardPickUpPage from "../src/components/dashboard-pickup";
import DashboardInRoutePage from "../src/components/dashboard-inroute";
import ValetHomePage from "./components/valet-homepage";
import ValetPark from "./components/valet-park";
import GuestQueue from "./components/valet-guest-queue";
import ValetArrived from "./components/valet-arrived";
import Checkout from "./components/checkout";
import ArrivedView from "../src/components/arrived-view";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  isAuthenticated= async() =>{
    let cookie = document.cookie;
    cookie = cookie.split(', ');
    var result = {};
    for (var i = 0; i < cookie.length; i++) {
        var cur = cookie[i].split('=');
        result[cur[0]] = cur[1];
    }
    let token = result.token;
    try {
      const verified = await jwt.verify(token, 'mysecret')
      if (await verified) {
        console.log(true);
      } 
    }
    catch {
      console.log(" outside false");
    }

    
  }

  render() {
    this.isAuthenticated();
    

    return (
        <div className="container">
          {/* <LoginForm loginSubmit={() => { this.loginUser() }}/> */}
          {/* <UserRegistrationForm registrationSubmit={() => { this.registerUser() }}/> */}
          <Router>
            <Route path='/' exact component={LoginPage}></Route>
            <Route path='/register' 
            exact component={UserRegistrationForm}></Route>
            <Route path='/login' exact component={LoginForm}></Route>
            <Route path='/dashboard' exact component={DashboardPage}></Route>
            <Route path='/dashboard-paid' exact component={DashboardPaidPage}></Route>
            <Route path='/dashboard-parked' exact component={DashboardParkedPage}></Route>
            <Route path='/dashboard-pickup' exact component={DashboardPickUpPage}></Route>
            <Route path='/dashboard-inroute' exact component={DashboardInRoutePage}></Route>
            <Route path='/arrived-view' exact component={ArrivedView}></Route>
            <Route path='/valet-homepage' exact component={ValetHomePage}></Route>
            <Route path='/valet-park' exact component={ValetPark}></Route>
            <Route path='/valet-guest-queue' exact component={GuestQueue}></Route>
            <Route path='/valet-arrived' exact component={ValetArrived}></Route>
            <Route path='/checkout' exact component={Checkout}></Route>
          </Router>
         </div>
    );
  }
}

export default App;
