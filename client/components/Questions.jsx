import React from 'react';
import Questaddon from './Questaddon';
import NewUserQues from './NewUserQues';
import CheckedReview from './CheckedReview';


const Questions = () => {
	return(
	  <div>
			<div className="row">
			  <div className="col-xs-12">
			  <NewUserQues />
			    <div className="col-xs-11">
			    </div>
			    <div className="col-xs-1">
				    <div className="col">
				      <p>January</p>
				      <p>21<sup>st</sup></p>
				    </div>
			    </div>
			  </div>
			</div>
			<div className="row">
			  <div className="col-xs-8">
				  <div className="all-questions">
				    <div className="question-sec">
				      <Questaddon />
				      {/*<CheckedReview />*/}
				    </div>
				    <div className="add-ques-btn">
					    <span>✚</span>
			      </div>
				  </div>
			  </div>
			</div>
		</div>
	)
}

export default Questions;