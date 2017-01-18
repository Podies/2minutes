import React from 'react';


const Questaddonnewuser = () => {
	return(
		<div className="row">
		  <div className="expected-ans">
		    <p>Expected Answer</p>
		    <span className="yes-ans">Yes</span>
		    <span className="no-ans">No</span>
		    <div className="number-range">
		      <span>Number</span>
		      <input type="number" min="0"/>
		    </div>
		  </div>
		</div>
	)
}

export default Questaddonnewuser;
