import React, { Component } from 'react';
import LoginInput from './LoginInput';
import SignupInput from './SignupInput';
import ForgotPassword from './ForgotPassword';
import axios from 'axios';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class SignupLoginModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent: 'login',
      loginError: '',
      signupError: '',
      forgotPasswordError: '',
      successSignup: false,
    }

    this.showSignup = this.showSignup.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showForgotPassword = this.showForgotPassword.bind(this);
    this.handleLoginError = this.handleLoginError.bind(this);
    this.handleSignupError = this.handleSignupError.bind(this);
    this.handleForgotPasswordError = this.handleForgotPasswordError.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }
  showLogin() {
    this.setState({ showComponent: 'login' });
  }
  showSignup() {
    this.setState({ showComponent: 'signup' });
  }
  showForgotPassword() {
    this.setState({ showComponent: 'forgot' });
  }

  handleLoginError(message) {
    this.setState({ loginError: message });
  }

  handleSignupError(message) {
    this.setState({ signupError: message });
  }

  handleForgotPasswordError(message) {
    this.setState({ forgotPasswordError: message });
  }

  handleLogin(data) {
    axios.post('/users/login', data).then((res) => {
      this.props.dispatch(actions.addActiveUser(res.data.user));
      this.props.dispatch(actions.hideModal());
    }).catch((err)=> {
      this.setState({ loginError: err.response.data.message});
    })
  }

  handleSignup(data) {
    axios.post('/users/signup', data).then((res) => {
      this.setState({ successSignup: true });
    }).catch((err) => {
      this.setState({ signupError: err.response.data});
    });
  }

  render() {
  	return (
  		<div className="signuploginmodal">
  		 <div className="grid">
  		  <div className="row">
  		    <div className="col-xs-2">
  		    </div>
  		    <div className="col-xs-8 modal">
            <div className="list-tabs">
             <ul>
              <li><a href="#" className={this.state.showComponent == 'login' ? 'active' : null} onClick={this.showLogin}>Log In</a></li>
              <li><a href="#" className={this.state.showComponent == 'signup' ? 'active' : null} onClick={this.showSignup}>Sign Up</a></li>
             </ul>
             <span href="" className="close-btn" onClick={this.props.hideModal}>✖</span>
            </div>
            {
              this.state.showComponent == 'login' ?
              	<LoginInput 
                showForgotPassword={this.showForgotPassword}
                handleLoginError={this.handleLoginError}
                loginError={this.state.loginError}
                handleLogin={this.handleLogin}
                />
                :
                null
            }
            {
              this.state.showComponent == 'signup' ?
              	<SignupInput
                handleSignupError={this.handleSignupError}
                signupError={this.state.signupError}
                handleSignup={this.handleSignup}
                successSignup={this.state.successSignup}
                />
                :
                null
            }
            {
              this.state.showComponent == 'forgot' ?
                <ForgotPassword 
                handleForgotPasswordError={this.handleForgotPasswordError}
                forgotPasswordError={this.state.forgotPasswordError}
                />
                :
                null
            }
  		    </div>
  		  </div>
  		 </div>
  		</div>
    )
  }
}

export default connect()(SignupLoginModal);