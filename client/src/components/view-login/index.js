import React from 'react';
import './style.css'

class ViewLogin extends React.Component {
    render() {
        return (
            <div className="viewLogin">{this.props.children}</div>
        )
    }

}

export default ViewLogin;