import React from 'react';
import './style.css';
import logo from './valetx-logo.jpg';

class LogoButton extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-primary btn-lg" id="logo-button">
                <img src={logo} alt="valetx logo"></img>
            </button>
        )
    }

}

export default LogoButton;