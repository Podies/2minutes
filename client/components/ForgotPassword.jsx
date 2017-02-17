import React from 'react';
import validator from 'validator';


const ForgotPassword = (props) => {
  let email = '';

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email.value) {
      props.handleForgotPasswordError('Email field needed.');
    }
    if (!validator.isEmail(email.value)) {
      props.handleForgotPasswordError('Invalid email.');
    }
  };

  return (
    <div className="forgot-password-sec">
      <div>{ props.forgotPasswordError }</div>
      <h1>Forgot Password?</h1>
      <p>Don&apos;t worry just enter your registered email Id below!</p>
      <input ref={(c) => { email = c; }} type="email" placeholder="Enter Registered Email Id" />
      <p>We will send a password reset link.</p>
      <input type="submit" value="Send Me Reset Link" onClick={handleForgotPassword} />
    </div>
  );
};

ForgotPassword.propTypes = {
  forgotPasswordError: React.PropTypes.string,
};

ForgotPassword.defaultProps = {
  forgotPasswordError: '',
};

export default ForgotPassword;
