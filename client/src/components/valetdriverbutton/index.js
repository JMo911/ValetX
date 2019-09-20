import React from 'react';
import './style.css'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


class ValetDriverButton extends React.Component {
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
            <div className="center-buttons valet-driver-button-modal">
                <Button className="btn-lg valet-driver-button btn-primary" onClick={this.toggle}>Valet Driver</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Valet Login</ModalHeader>
                <ModalBody>
                {this.props.children}
                </ModalBody>
                </Modal>
            </div>
        )
    }

}

export default ValetDriverButton;