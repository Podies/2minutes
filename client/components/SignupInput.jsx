import React from 'react';
import validator from 'validator';

const SignupInput = (props) => {
  let name = '';
  let email = '';
  let password = '';

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name.value || !password.value || !email.value) {
      return props.handleSignupError('All fields are needed');
    }
    if (!validator.isEmail(email.value)) {
      return props.handleSignupError('Invalid Email');
    }
    if (password.value.length < 8) {
      return props.handleSignupError('Password length should be more then 8 characters');
    }
    return props.handleSignup({ name: name.value, email: email.value, password: password.value });
  };

  return (
    <div className="col-xs-12 signup-sec">
      <div className="signup-form">
        {
          !props.successSignup ?
            <div>
              <div>
                {props.signupError}
              </div>
              <form method="POST" onSubmit={handleSignup}>
                <fieldset className="signup-input-sec">
                  <div className="col-xs-12">
                    <div className="col">
                      <label htmlFor="name">
                        <input type="text" ref={ (c) => {name = c; }} name="name" placeholder="Full Name" />
                      </label>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="col">
                      <label htmlFor="email">
                        <input type="email" ref={ (c) => { email = c; }} name="email" placeholder="Email ID"/>
                      </label>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="col">
                      <label htmlFor="password">
                        <input type="password" ref={(c) => { password = c; }} name="password" placeholder="Password" />
                      </label>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="col">
                      <label htmlFor="submit">
                        <input type="submit" name="submit" value="Sign Up" />
                      </label>
                    </div>
                  </div>
                </fieldset>
                <p>OR</p>
                <fieldset className="alternate-options">
                  <div className="col-xs-12">
                    <div className="col">
                      <a href="/auth/google" className="signupopt1">SignUp With <i className="fa fa-google-plus" aria-hidden="true" /></a>
                      <a href="/auth/google" className="signupopt2">SignUp With <i className="fa fa-facebook" aria-hidden="true" /></a>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          :
            <div>We sent you a email, please verify to complete the process.</div>
        }
      </div>
    </div>
  );
};

SignupInput.propTypes = {
  successSignup: React.PropTypes.bool,
};

SignupInput.defaultProps = {
  successSignup: false,
};

export default SignupInput;
