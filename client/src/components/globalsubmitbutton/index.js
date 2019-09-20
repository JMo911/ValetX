import React from 'react';
import './style.css'

class GlobalSubmitButton extends React.Component {
    render() {
        return (
            <button type="button" className="center-buttons btn btn-primary btn-lg global-submit-button" onClick={this.props.toggle}>Submit</button>
        )
    }

}

export default GlobalSubmitButton;