import React from 'react';

const SignupInput = () => {
	return(
    <div className="col-xs-12 signup-sec">
   		<div className="signup-form">
   			<form method="post" action="/users/signup">
   			 <fieldset className="">
     			 <div className="col-xs-6">
	     			 <div className="col">
	     			  <label>First Name
	     			   <input type="text" name="firstName" />
	     			  </label>
	     			 </div>
     			 </div>
     			 <div className="col-xs-6">
             <div className="col">
              <label>Last-name
               <input type="text" name="lastName" />
              </label>
             </div>
           </div>
   			   <div className="col-xs-12">
     			   <div className="col">
	     			  <label>Email ID
	     			   <input type="email" name="email" />
	     			  </label>
     			   </div>
   			   </div>
   			  <div className="col-xs-12">
     			  <div className="col">
	     			  <label>Password
	     			   <input type="password" name="password" />
	     			  </label>
     			  </div>
   			  </div>
   			  <div className="col-xs-12">
     			  <div className="col">
	     			  <label>
	     			   <input type="submit" name="submit" value="Sign Up" />
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