import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Cookies from 'universal-cookie';

class UserRegistrationForm extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: ''
    }

    cookies = new Cookies();

    loginSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            "first_name": event.currentTarget.first_name,
            "last_name": event.currentTarget.last_name,
            "email": event.currentTarget.email,
            "username": event.currentTarget.username,
            "password": event.currentTarget.password
        });
        await axios.post('/api/users', {
            'first_name': this.state.first_name,
            'last_name': this.state.last_name,
            'email': this.state.email,
            'username': this.state.username,
            'password': this.state.password,
            'parked': false,
            'paid': false,
            'pick_up': false,
            'in_route': false,
            'arrived': false
        })
            
        this.props.history.push("/login");
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="row">
                <div className="col-8 offset-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" className="form-control" name="first_name" id="first_name" onChange={this.handleChange} value={this.state.first_name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" className="form-control" name="last_name" id="last_name" onChange={this.handleChange} value={this.state.last_name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" id="username" onChange={this.handleChange} value={this.state.username}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.loginSubmit}> Submit </button>
                    </form>
                </div>
            </div>
    )
        ;
    }
}

UserRegistrationForm.propTypes = {};

export default UserRegistrationForm;
