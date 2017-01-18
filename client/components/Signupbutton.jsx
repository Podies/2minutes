import React from 'react';


const Signupbutton = (props) => {
	return(
		<div className="col-xs-10">
			<div className="col-xs-9">
			</div>
			<div className="col-xs-3">
	     <div className="col get-started-btn">
	      <a href="#" className="get-started" onClick={props.showLoginModal}>Sign Up</a>
	     </div>
	    </div>
    </div>
	)
}

export default Signupbutton;