import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';


class ValetLoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    error: false,
    errormessage: ''
}

cookies = new Cookies();

valetLogin =  async (event) => {
    event.preventDefault();
    this.setState({
        "username": event.currentTarget.username,
        "password": event.currentTarget.password
    });
    axios.post('/api/valetauth', {
        'username': this.state.username,
        'password': this.state.password
    }).then((response) => {
        this.cookies.set('token', response.data.token);
        window.location = "/dashboard";
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

          <Button className="btn-lg btn-primary valet-login-submit-button" 
          onClick={this.valetLogin}
          >Submit</Button>

        </Form>

      );
    }
  }

export default ValetLoginForm;