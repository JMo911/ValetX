import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FormErrors } from '../FormErrors';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';


class ValetRegistrationForm extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    error: false,
    errormessage: ''
}

cookies = new Cookies();

registrationSubmit =  async (event) => {
    event.preventDefault();
    this.setState({
        "first_name": event.currentTarget.first_name,
        "last_name": event.currentTarget.last_name, 
        "email": event.currentTarget.email, 
        "username": event.currentTarget.username,
        "password": event.currentTarget.password
    });
    await axios.post('/api/users', {
        'first_name': this.state.first_name,
        'last_name': this.state.last_name,
        'email': this.state.email,
        'username': this.state.username,
        'password': this.state.password
    }).then((response) => {
      console.log(response);
        window.location = "/";
    }).catch((error) => {
        if (error.response) {
            console.log(error.response.data.info.message);
            const errormessage = error.response.data.info.message;
            this.setState({
                error: true,
                errormessage: errormessage
            });
        } 
    });
}

handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({[name]: value});
}

    render() {
      const errormessage = this.state.errormessage;
        if (this.state.error){
            
            alert = <div className="alert alert-info col-sm-10 offset-sm-1" role="alert">
                Error: {errormessage}
            </div>
        }
      return (
        <Form>
        <div>{alert}</div>
        <FormGroup className='form-group'>
          <Label for="first_name">First Name</Label>
          <Input type="text" className="form-control" name="first_name" id="first_name" placeholder=""
          value={this.state.first_name}
          onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className='form-group'>
          <Label for="last_name">Last Name</Label>
          <Input type="text" className="form-control" name="last_name" id="last_name" placeholder=""
          value={this.state.last_name}
          onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className='form-group'>
          <Label for="email">Email</Label>
          <Input type="email" className="form-control" name="email" id="email" placeholder=""
          value={this.state.email}
          onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className='form-group'>
          <Label for="username">Username</Label>
          <Input type="text" className="form-control" name="username" id="username" placeholder=""
          value={this.state.username}
          onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className='form-group'>
          <Label for="password">Password</Label>
          <Input type="password" className="form-control" name="password" id="password" placeholder=""
          value={this.state.password}
          onChange={this.handleChange}
          />
        </FormGroup>

          <Button className="btn-lg btn-primary valet-registration-submit-button" 
          onClick={this.registrationSubmit}
          >Submit</Button>

        </Form>

      );
    }
  }

export default ValetRegistrationForm;