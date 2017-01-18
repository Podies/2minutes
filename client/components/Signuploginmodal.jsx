import React from 'react';
import Loginmodal from './Loginmodal';
import Signupmodal from './Signupmodal';
import ForgotPassword from './ForgotPassword';


const Signuploginmodal = () => {
	return (
		<div className="signuploginmodal">
		 <div className="grid">
		  <div className="row">
		    <div className="col-xs-2">
		    </div>
		    <div className="col-xs-8 modal">
          <div className="list-tabs">
           <ul>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Log In</a></li>
           </ul>
           <span className="close-btn">✖</span>
          </div>
          <ForgotPassword />
        	{/*<Loginmodal />*/}
        	{/* <Signupmodal /> */}
		    </div>
		  </div>
		 </div>
		</div>
  )
}

export default Signuploginmodal;