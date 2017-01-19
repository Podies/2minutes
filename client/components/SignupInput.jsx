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
   			 <fieldset className="">
     			 <div className="col-xs-6">
	     			 <div className="col">
	     			  <label>First Name
	     			   <input type="text" ref={ (c) => {firstName = c; }} name="firstName" />
	     			  </label>
	     			 </div>
     			 </div>
     			 <div className="col-xs-6">
             <div className="col">
              <label>Last Name
               <input type="text" ref={ (c) => { lastName = c; }}name="lastName" />
              </label>
             </div>
           </div>
   			   <div className="col-xs-12">
     			   <div className="col">
	     			  <label>Email ID
	     			   <input type="email" ref={ (c) => { email = c; }} name="email" />
	     			  </label>
     			   </div>
   			   </div>
   			  <div className="col-xs-12">
     			  <div className="col">
	     			  <label>Password
	     			   <input type="password" ref={ (c) => {password = c; } } name="password" />
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
   			 <fieldset className="">
   			 <div className="col-xs-12">
     			 <div className="col signupopt1">
     			   <a href="/auth/google" className="">Signup With Google</a>
     			 </div>
   			 </div>
   			 <div className="col-xs-12">
     			 <div className="col signupopt2">
     			  <a href="/auth/google" className="">Signup With Facebook</a>
     			 </div>
   			 </div>
   			 </fieldset>
   			</form>
   		</div>
		</div>
	)
}

export default SignupInput;