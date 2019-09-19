import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Cookies from 'universal-cookie';

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        error: false,
        errormessage: ''
    }

    cookies = new Cookies();

    // constructor(props) {
    //     super(props);
    // }

    loginSubmit =  async (event) => {
        event.preventDefault();
        this.setState({
            "username": event.currentTarget.username,
            "password": event.currentTarget.password
        });
        axios.post('/api/auth', {
            'username': this.state.username,
            'password': this.state.password
        }).then((response) => {
            this.cookies.set('token', response.data.token);
            //redirect to home page?
            // console.log(response);
            this.props.history.push("/guest");
        }).catch((error) => {
            // Error 😨
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data.info.message);
                const errormessage = error.response.data.info.message;
                this.setState({
                    error: true,
                    errormessage: errormessage
                });
                // console.log(error.response.status);
                // console.log(error.response.headers);
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                // console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                // console.log('Error', error.message);
            }
            // console.log(error.config);
        });
        // this.props.history.push("/guest");
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        const errormessage = this.state.errormessage;
        if (this.state.error){
            
            alert = <div className="alert alert-info col-sm-10 offset-sm-1" role="alert">
                Error: {errormessage}
            </div>
        }

        return (
           
            <div className="row">
                <div>{alert}</div>
                <div className="col-8 offset-2">
                    <form>
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

LoginForm.propTypes = {};

export default LoginForm;
