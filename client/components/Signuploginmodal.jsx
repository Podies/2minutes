import React, { Component } from 'react';
import LoginInput from './LoginInput';
import SignupInput from './SignupInput';

class SignupLoginModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      showComponent: 'login'
    }
    this.showSignup = this.showSignup.bind(this);
    this.showLogin = this.showLogin.bind(this);
  }
  showLogin() {
    this.setState({ showComponent: 'login' });
  }
  showSignup() {
    this.setState({ showComponent: 'signup' });
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
              <li><a href="#" className="active" onClick={this.showLogin}>Log In</a></li>
              <li><a href="#" onClick={this.showSignup}>Sign Up</a></li>
             </ul>
             <span href="" className="close-btn" onClick={this.props.hideModal}>✖</span>
            </div>
            {
              this.state.showComponent == 'login' ?
            	<LoginInput />
              :
              null
            }
            {
              this.state.showComponent == 'signup' ?
            	<SignupInput />
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

export default SignupLoginModal;