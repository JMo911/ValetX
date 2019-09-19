import React, { Component } from "react";
import "./App.css";
import LoginForm from './components/LoginForm';
import UserRegistrationForm from "./components/UserRegistrationForm";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
        <div className="container">
          {/* <LoginForm loginSubmit={() => { this.loginUser() }}/> */}
          {/* <UserRegistrationForm registrationSubmit={() => { this.registerUser() }}/> */}
          <Router>
            <Route path='/register' 
            exact component={UserRegistrationForm}></Route>
            <Route path='/login' exact component={LoginForm}></Route>
            
          </Router>
         </div>
    );
  }
}

export default App;
