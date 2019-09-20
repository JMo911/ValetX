import React from 'react';
import './style.css'

class AddCardButton extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-primary btn-lg">{this.props.children}</button>
        )
    }

}

export default AddCardButton;