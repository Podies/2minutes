import React from 'react';
import validator from 'validator';


const ForgotPassword = (props) => {
  let email = '';
  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email.value) {
      props.handleForgotPasswordError('Email field need not to be blank.');
    }
    if (!validator.isEmail(email.value)) {
      props.handleForgotPasswordError('You need a valid email.');
    }
    props.handleForgotPassword({ email: email.value });
  }
	return(
      <div>
        <div>{props.forgotPasswordError}</div>
        <h1>Forgot Password?</h1>
        <p>Don't worry just enter your registered email Id below!</p>
        <input type="email"/>
        <p>We will send a password reset link.</p>
        <input type="submit" refs={(c) => { email = c; }}value="Send Me Reset Link"/>
      </div>
		)
}

export default ForgotPassword;