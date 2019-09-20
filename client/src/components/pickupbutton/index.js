import React from 'react';
import './style.css'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class PickUpButton extends React.Component {
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
      }
    render() {
        return (
            <div className="center-buttons pickup-button-modal">
                <Button className="btn-lg pickup-button btn-primary disabled" onClick={this.toggle}>Pick Up</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Est Wait Time</ModalHeader>
                <ModalBody>
                {this.props.children}
                </ModalBody>
                </Modal> 
            </div>
        )
    }

}

export default PickUpButton;