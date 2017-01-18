import React from 'react';


const Loginmodal = () => {
	return(
		<div className="col-xs-12 login-sec">
   		<div className="login-form">
   			<form>
   			 <fieldset className="">
   			   <div className="col-xs-12">
     			   <div className="col">
	     			  <label>Email ID
	     			   <input type="email" name="email-address" />
	     			  </label>
     			   </div>
   			   </div>
   			  <div className="col-xs-12">
     			  <div className="col">
	     			  <label className="password">Password
	     			   <input type="password" name="password" />
               <a href="#" className="forgot-password">Forgot Password ?</a>
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
	     			   <input type="submit" name="submit" value="Log In" />
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

export default Loginmodal;