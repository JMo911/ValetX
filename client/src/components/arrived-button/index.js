import React from 'react';
import './style.css'
import { Button, Modal, ModalBody, ModalHeader} from 'reactstrap';

class ArrivedButton extends React.Component {
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
            <div className="center-buttons arrived-button-modal">
                <Button className="btn-lg btn-primary arrived-button" onClick={this.toggle}>Arrived</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}></ModalHeader>
                <ModalBody>
                {this.props.children}
                </ModalBody>
                {/* <ModalFooter>
                    <Button className="btn-lg btn-primary arrived-submit-button" onClick={this.toggle}>Submit</Button>
                </ModalFooter> */}
                </Modal>
            </div>
        )
    }

}

export default ArrivedButton;