import React from 'react';

const DailyReview = () => {
	return (
    <div className="row">
      <div className="col">
	      <p>Talk to family members every week.</p>
	      <p className="delete">Delete this question.</p>
	    </div>
		  <div className="expected-ans">
		    <p>Your Answer</p>
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

export default DailyReview;