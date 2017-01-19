import React from 'react';
import validator from 'validator';

const SignupInput = (props) => {

  let firstName = '';
  let lastName = '';
  let email = '';
  let password = '';

  const handleSignup = (e) => {
    e.preventDefault();
    if (!firstName.value || !lastName.value || !password.value || !email.value) {
      return props.handleSignupError('All fields are needed');
    }
    if (!validator.isEmail(email.value)) {
      return props.handleSignupError('Invalid Email');
    }
    if (password.value.length < 8) {
      return props.handleSignupError('Password length should be more then 8 characters')
    }
    props.handleSignup({ firstName: firstName.value, lastName: lastName.value, email: email.value, password: password.value});
  };

	return(
    <div className="col-xs-12 signup-sec">
   		<div className="signup-form">
        <div>
          {props.signupError}
        </div>
   			<form method="post" action="/users/signup">
   			 <fieldset className="signup-input-sec">
     			 <div className="col-xs-12">
	     			 <div className="col">
	     			  <label>
	     			   <input type="text" ref={ (c) => {firstName = c; }} name="name" placeholder="Full Name" />
	     			  </label>
	     			 </div>
     			 </div>
   			   <div className="col-xs-12">
     			   <div className="col">
	     			  <label>
	     			   <input type="email" ref={ (c) => { email = c; }} name="email" placeholder="Email ID"/>
	     			  </label>
     			   </div>
   			   </div>
   			  <div className="col-xs-12">
     			  <div className="col">
	     			  <label>
	     			   <input type="password" ref={ (c) => {password = c; } } name="password" placeholder="Password"/>
	     			  </label>
     			  </div>
   			  </div>
   			  <div className="col-xs-12">
     			  <div className="col">
	     			  <label>
	     			   <input type="submit" name="submit" onClick={handleSignup} value="Sign Up" />
	     			  </label>
     			  </div>
   			  </div>
   			 </fieldset>
   		   <p>OR</p>
   			 <fieldset className="alternate-options">
     			 <div className="col-xs-12">
       			 <div className="col">
       			   <a href="/auth/google" className="signupopt1">SignUp With <i className="fa fa-google-plus" aria-hidden="true"></i></a>
               <a href="/auth/google" className="signupopt2">SignUp With <i className="fa fa-facebook" aria-hidden="true"></i></a>
       			 </div>
     			 </div>
   			 </fieldset>
   			</form>
   		</div>
		</div>
	)
}

export default SignupInput;