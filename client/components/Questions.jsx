import React, { Component } from 'react';
import QuestionInput from './QuestionInput';
import NewUserQuestion from './NewUserQuestion';
import * as api from '../actions/apiCalls';
import SavedQuestions from './SavedQuestions';
import { connect } from 'react-redux';
import * as actionCreator from '../actions/index';
import ReviewQuestions from './ReviewQuestions';
import UserGreetingReviewSession from './UserGreetingReviewSession';
import SavedQuestionsReviewSession from './SavedQuestionsReviewSession';

class Questions extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount() {
		if (this.props.activeUser) {
			this.props.dispatch(actionCreator.fetchUserQuestionSet(this.props.activeUser._id));
		} else {
			return this.context.router.push('/');
		}
	}

	render() {
		return(
		  <div>
		    {/*<div className="col-xs-11">
		    </div>
		    <div className="col-xs-1">
			    <div className="col  date-sec">
			      <p className="month-name">January,</p>
			      <p className="daily-date">21<sup>st</sup></p>
			    </div>
		    </div>*/}
				<div className="row">
				  <div className="col-xs-12">
				  <UserGreetingReviewSession />
				  {/*<NewUserQuestion />*/}
				  </div>
				</div>
				<div className="row">
				  <div className="col-xs-12">
					  <div className="all-questions">
					    <div className="question-sec">
					       <ReviewQuestions />
					      {/*<QuestionInput 
					      	activeUser={this.props.activeUser}
					      	dispatch={this.props.dispatch}
					      />*/}
					    </div>
              <SavedQuestionsReviewSession/>
					    {/*<SavedQuestions
					    	questions={this.props.userQuestions.questions}
					    />*/}
					  </div>
				  </div>
				</div>
			</div>
		)
	}
}

Questions.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

function mapStateToProps(store) {
	return store;
}

export default connect(mapStateToProps)(Questions);