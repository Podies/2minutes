import React, { Component } from 'react';
import QuestionInput from './QuestionInput';
import NewUserQuestion from './NewUserQuestion';
import CheckedReview from './CheckedReview';
import * as api from '../actions/apiCalls';
import SavedQuestions from './SavedQuestions';
import { connect } from 'react-redux';
import * as actionCreator from '../actions/index';


class Questions extends Component {
	constructor(props){
		super(props);
	}
	componentWillMount() {	
		this.props.dispatch(actionCreator.fetchUserQuestionSet(this.props.activeUser._id));
	}
	render() {
		return(
		  <div>
				<div className="row">
				  <div className="col-xs-12">
				  <NewUserQuestion />
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
					      <QuestionInput 
					      	activeUser={this.props.activeUser}
					      />
					      <CheckedReview />
					    </div>
					    <SavedQuestions
					    	questions={this.props.userQuestions.questions}
					    />
					    <div className="add-ques-btn">
						    <span>✚</span>
				      </div>
					  </div>
				  </div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(store) {
	return store;
}

export default connect(mapStateToProps)(Questions);