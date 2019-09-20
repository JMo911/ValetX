import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FormErrors } from '../FormErrors';
import { Link } from "react-router-dom";

class ValetLoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      badgeNumber: '',
      formErrors: {badgeNumber: ''},
      badgeNumberValid: false,
      formValid: false
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
    let badgeNumberValid = this.state.badgeNumberValid;

    switch(fieldName) {
      case 'badgeNumber':
        badgeNumberValid = value.match(/^[0-9]{6,6}$/);
        fieldValidationErrors.badgeNumber = badgeNumberValid ? '' : ' is 6 numbers';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    badgeNumberValid: badgeNumberValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.badgeNumberValid});
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

        <Form onKeyPress={this.onKeyPress}>
        <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.badgeNumber)}`}>
          <Label for="badgeNumber">Badge Number</Label>
          <Input type="text" name="badgeNumber" id="badgenumber" placeholder=""
          value={this.state.badgeNumber}
          onChange={this.handleUserInput}
          />
        </FormGroup>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <Link to="/valet-homepage">
          <Button className="btn-lg btn-primary valet-driver-submit-button"
          disabled={!this.state.formValid}>Submit</Button>
        </Link>
        </Form>

      );
    }
  }

export default ValetLoginForm;