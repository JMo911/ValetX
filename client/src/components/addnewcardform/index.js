import React from 'react';
import './style.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';


class AddNewCardForm extends React.Component {
    render() {
      return (

        <Form>
        <FormGroup>
          <Label for="cc">CC#</Label>
          <Input type="text" name="cc" id="cc" placeholder="xxxx xxxx xxxx xxxx" />
        </FormGroup>
        <FormGroup>
          <Label for="exp">Exp Date</Label>
          <Input type="text" name="exp" id="exp" placeholder="xx xx" />
        </FormGroup>
        <FormGroup>
          <Label for="ccv">CCV</Label>
          <Input type="text" name="ccv" id="ccv" placeholder="xxx" />
        </FormGroup>
        </Form>

      );
    }
  }

export default AddNewCardForm;