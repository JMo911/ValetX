import React, { Component } from "react";
import "./App.css";
import LoginForm from './components/LoginForm';
// import RegistrationForm from "./components/RegistrationForm";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    return (
        <div className="container">
          {/* <Router> */}
            {/* <Route path='/register' exact><RegistrationForm registrationSubmit={() => { this.registerUser() }}/></Route> */}
            {/* <Route path='/login' exact><LoginForm loginSubmit={() => { this.loginUser() }}/></Route> */}
            <LoginForm loginSubmit={() => { this.loginUser() }}/>
          {/* </Router> */}
         </div>
    );
  }
}

export default App;
