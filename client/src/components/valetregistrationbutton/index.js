import React from 'react';
import './style.css'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ValetRegistrationButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
        // this.props.history.push("/dashboard");
      }
    render() {
        return (
            <div className="center-buttons valet-registration-button-modal">
                <Button className="btn-lg btn-primary valet-registration-button" onClick={this.toggle}>New Valet?</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Create Account</ModalHeader>
                <ModalBody>
                {this.props.children}
                </ModalBody>
                </Modal>
            </div>
        )
    }

}

export default ValetRegistrationButton;