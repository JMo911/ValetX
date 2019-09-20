import React from 'react';
import './style.css'

class LoginCard extends React.Component {
    render() {
        return (
            <div className="loginCard">
            {this.props.children}
            <div className="copyright">© 2019 ValetX</div>
            </div>
        )
    }

}

export default LoginCard;