import React from 'react';

const Signupmodal = () => {
	return(
    <div className="col-xs-12 signup-sec">
   		<div className="signup-form">
   			<form>
   			 <fieldset className="">
     			 <div className="col-xs-6">
	     			 <div className="col">
	     			  <label>First Name
	     			   <input type="text" name="first-name" />
	     			  </label>
	     			 </div>
     			 </div>
     			 <div className="col-xs-6">
	     			 <div className="col">
	     			  <label>Last-name
	     			   <input type="text" name="last-name" />
	     			  </label>
     			   </div>
   			   </div>
   			   <div className="col-xs-12">
     			   <div className="col">
	     			  <label>Email ID
	     			   <input type="email" name="email-address" />
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
     			   <a href="#" className="">Signup With Google</a>
     			 </div>
   			 </div>
   			 <div className="col-xs-12">
     			 <div className="col signupopt2">
     			  <a href="#" className="">Signup With Facebook</a>
     			 </div>
   			 </div>
   			 </fieldset>
   			</form>
   		</div>
		</div>
	)
}

export default Signupmodal;