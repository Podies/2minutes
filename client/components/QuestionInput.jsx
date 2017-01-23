import React, { Component } from 'react';
import * as actionCreators from '../actions/index';


class QuestionInput extends Component {
	constructor(props){
		super(props);
		this.state = {
			expectedAnswer: '',
			questionError: '',
		}
		this.saveQuestion = this.saveQuestion.bind(this);
		this.updateAnswer = this.updateAnswer.bind(this);
	}

	saveQuestion(e) {
		e.preventDefault();
		if (!this.question.value || !this.state.expectedAnswer) {
			if (!this.question.value) {
				this.setState({ questionError: 'Question is needed'});
			} else {
				this.setState({ questionError: 'Expected answer is needed'});
			}
		} else {
			const userInput = { name: this.question.value, userPreference: this.state.expectedAnswer, userId: this.props.activeUser._id };
			this.props.dispatch(actionCreators.addNewQuestion(userInput));
			this.question.value = '';
			this.setState({ expectedAnswer: '' });
		}
	}

	updateAnswer(e) {
		if(e.target.value == 'true' || e.target.value == 'false') {
			document.getElementById('number-input').value = '';
		}
		this.setState({ expectedAnswer: e.target.value });
	}

	render(){
		return(
			<div className="row">
			  <div className="col">
		      <input type="text" className="question" name="name" ref={(c) => { this.question = c; }} placeholder="Eg.Talk to family members every week."/>
		      <p className="delete">Delete this question.</p>
				  <div className="expected-ans">
				    <p>Expected Answer</p>
				    <div>{this.state.questionError}</div>
				    {/*<span className="yes-ans">Yes</span>
				    		<span className="no-ans">No</span>*/}
				    <div onChange={this.updateAnswer}>
					    <input type="radio" name="expectedAnswer" value="true" checked={this.state.expectedAnswer == 'true' ? true : false} /> Yes
				      <input type="radio" name="expectedAnswer" value="false" checked={this.state.expectedAnswer == 'false' ? true : false} /> No
					    <div className="number-range">
					      <span>Number</span>
					      <input type="number" name="expectedAnswer" id="number-input" min="1" />
					    </div>
				    	<button onClick={this.saveQuestion}>Save</button>
					  </div>
				  </div>
				</div>
			</div>
		)
	}
}


export default QuestionInput;
