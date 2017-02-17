import React from 'react';
import validator from 'validator';

const LoginInput = (props) => {
  let email = '';
  let password = '';

  const showForgotPassword = () => {
    props.showForgotPassword();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.value || !password.value) {
      return props.handleLoginError('Email and password needed.');
    }

    if (!validator.isEmail(email.value)) {
      return props.handleLoginError('Invalid Email');
    }
    props.handleLogin({ email: email.value, password: password.value });
  };

  return (
    <div className="col-xs-12 login-sec">
      <div className="login-form">
        <div>
          {props.loginError}
        </div>
        <form method="post" onSubmit={handleLogin}>
          <fieldset className="login-input-sec">
            <div className="col-xs-12">
              <div className="col">
                <label className="email" htmlFor="email"><i className="fa fa-user-circle-o" aria-hidden="true" />
                  <input type="email" ref={(c) => { email = c; }} name="email" placeholder="Email or Username" />
                </label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="col align-link">
                <label className="password" htmlFor="password"><i className="fa fa-key" aria-hidden="true" />
                  <input type="password" ref={(c) => { password = c; }}name="password" placeholder="Enter Password" />
                  <a href="#" className="forgot-password" onClick={showForgotPassword}>Forgot Password ?</a>
                </label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="col styled-checkbox">
                <input type="checkbox" name="forgot" />
                <label className="keep-me-logged-in" htmlFor="forgot">Remember Me</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="col">
                <label htmlFor="submit">
                 <input type="submit" name="submit" value="Log In" />
                </label>
              </div>
            </div>
          </fieldset>
          <p className="or">OR</p>
          <fieldset className="alternate-options">
            <div className="col-xs-12">
              <div className="col ">
                <a href="/auth/google" className="signupopt1">Log In With <i className="fa fa-google-plus" aria-hidden="true" /></a>
                <a href="/auth/facebook" className="signupopt2">Log In With <i className="fa fa-facebook" aria-hidden="true" /></a>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

LoginInput.propTypes = {
  loginError: React.PropTypes.string,
};

LoginInput.defaultProps = {
  loginError: '',
};

export default LoginInput;
