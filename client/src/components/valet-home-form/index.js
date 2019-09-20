import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { FormErrors } from '../FormErrors';
import { Redirect } from 'react-router-dom';

class ValetHomeForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      licensePlate: '',
      formErrors: {firstName: '', lastName: '', licensePlate: ''},
      firstNameValid: false,
      lastNameValid: false,
      licensePlateValid: false,
      formValid: false,
      redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/valet-park' />
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let licensePlateValid = this.state.licensePlateValid;

    switch(fieldName) {
      case 'firstName':
        firstNameValid = value.match(/^[a-zA-Z]*$/);
        fieldValidationErrors.firstName =
        firstNameValid ? '' : ' can only be letters';
        break;
      case 'lastName':
        lastNameValid = value.match(/^[a-zA-Z]*$/);
        fieldValidationErrors.lastName = 
        lastNameValid ? '' : ' can only be letters';
        break;
      case 'licensePlate':
        licensePlateValid = value.match(/^[a-zA-Z0-9]{6,6}$/);
        fieldValidationErrors.licensePlate =
        licensePlateValid ? '' : ' can only be 6 letters/numbers';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    firstNameValid: firstNameValid,
                    lastNameValid: lastNameValid,
                    licensePlateValid: licensePlateValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid:this.state.firstNameValid && this.state.lastNameValid && this.state.licensePlateValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  onKeyPress(event) {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  }

    render() {
      return (
        <div id="valet-home-form">
          <Form onKeyPress={this.onKeyPress}>
            <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
            <Label for="firstName">First Name</Label>
            <Input type="text" name="firstName" id="firstName" placeholder=""
            value={this.state.firstName}
            onChange={this.handleUserInput}
            />
            </FormGroup>
            <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
            <Label for="lastName">Last Name</Label>
            <Input type="text" name="lastName" id="lastName" placeholder=""
            value={this.state.lastName}
            onChange={this.handleUserInput}
            />
            </FormGroup>
            <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.licensePlate)}`}>
            <Label for="licensePlate">License Plate</Label>
            <Input type="text" name="licensePlate" id="licensePlate" placeholder=""
            value={this.state.licensePlate}
            onChange={this.handleUserInput}
            />
            </FormGroup>
            {this.renderRedirect()}
            <Button className="btn-lg btn-primary"
              disabled={!this.state.formValid} onClick={this.setRedirect}>Log Guest</Button>

            <Link to="/valet-guest-queue">
                <Button className="btn-lg btn-primary">See Queue</Button>
            </Link>
          </Form>
        </div>
      );
    }
  }

export default ValetHomeForm;