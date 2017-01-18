import React from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Signuploginmodal = (props) => {
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
           <span href="" className="close-btn" onClick={props.hideLogin}>✖</span>
          </div>
          	<LoginModal />
          	{/* <SignupModal /> */}
		    </div>
		  </div>
		 </div>
		</div>
  )
}

export default Signuploginmodal;