import React, { Component } from 'react';
import * as actionCreators from '../actions/index';


class QuestionInput extends Component {
	constructor(props){
		super(props);
		this.state = {
			expectedAnswer: '',
		}
		this.saveQuestion = this.saveQuestion.bind(this);
		this.updateAnswer = this.updateAnswer.bind(this);
	}

	saveQuestion(e) {
		e.preventDefault();
		const userInput = { name: this.question.value, userPreference: this.state.expectedAnswer, userId: this.props.activeUser._id};
		this.props.dispatch(actionCreators.addNewQuestion(userInput));
		console.log(userInput);
	}

	updateAnswer(e) {
		if(e.target.value == 'yes' || e.target.value == 'no') {
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
				    {/*<span className="yes-ans">Yes</span>
				    		<span className="no-ans">No</span>*/}
				    <div onChange={this.updateAnswer}>
					    <input type="radio" name="expectedAnswer" value="yes" checked={this.state.expectedAnswer == 'yes' ? true : false} /> Yes
				      <input type="radio" name="expectedAnswer" value="no" checked={this.state.expectedAnswer == 'no' ? true : false} /> No
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
