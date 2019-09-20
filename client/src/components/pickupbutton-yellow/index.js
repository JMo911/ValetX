import React from 'react';
import './style.css'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from "react-router-dom";

class PickUpButtonYellow extends React.Component {
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
              <Link to="/dashboard-pickup">
                <Button className="btn-lg pickup-button btn-primary" onClick={this.toggle}>Pick Up</Button>
              </Link>
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

export default PickUpButtonYellow;