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
    if(!email.value || !password.value){
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
   			<form method="post" action="/users/">
   			 <fieldset className="">
   			   <div className="col-xs-12">
     			   <div className="col">
	     			  <label>Email ID
	     			   <input type="email" ref={(c) => { email = c; }} name="email" />
	     			  </label>
     			   </div>
   			   </div>
   			  <div className="col-xs-12">
     			  <div className="col">
	     			  <label className="password">Password
	     			   <input type="password" ref={(c) => { password = c; }}name="password" />
               <a href="#" className="forgot-password" onClick={showForgotPassword}>Forgot Password ?</a>
	     			  </label>
     			  </div>
   			  </div>
          <div className="col-xs-12">
            <div className="col">
              <label>
               <input type="checkbox"/> Keep me logged in.
              </label>
            </div>
          </div>
   			  <div className="col-xs-12">
     			  <div className="col">
	     			  <label>
	     			   <input type="submit" name="submit" value="Log In" onClick={handleLogin}/>
	     			  </label>
     			  </div>
   			  </div>
   			 </fieldset>
   		   <p>OR</p>
   			 <fieldset className="">
   			 <div className="col-xs-12">
     			 <div className="col signupopt1">
     			   <a href="/auth/google" className="">Log in With Google</a>
     			 </div>
   			 </div>
   			 <div className="col-xs-12">
     			 <div className="col signupopt2">
     			  <a href="/auth/facebook" className="">Log in With Facebook</a>
     			 </div>
   			 </div>
   			 </fieldset>
   			</form>
   		</div>
		</div>
	)
}

export default LoginInput;