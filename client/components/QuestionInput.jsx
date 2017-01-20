import React from 'react';
import * as api from '../actions/apiCalls';


const QuestionInput = (props) => {
	let question = '';
	let expectedAnswer = '';
	let checked = '';
	console.log(checked);

	const saveQuestion = (e) => {
		e.preventDefault();
		const userInput = {name: question.value, userPreference: expectedAnswer.value, userId: props.activeUser._id};
		api.addNewQuestion(userInput);
		console.log(userInput);
	}

	const updateAnswer = (e) => {
		expectedAnswer = e.target;
		checked = e.target.value;
	}
	return(
		<div className="row">
		  <div className="col">
	      <input type="text" className="question" name="name" ref={(c) => {question = c;}} placeholder="Eg.Talk to family members every week."/>
	      <p className="delete">Delete this question.</p>
			  <div className="expected-ans">
			    <p>Expected Answer</p>
			    {/*<span className="yes-ans">Yes</span>
			    		<span className="no-ans">No</span>*/}
			    <div onChange={updateAnswer}>
				    <input type="radio" name="expectedAnswer" value="yes" /> Yes
	          <input type="radio" name="expectedAnswer" value="no" /> No
				    <div className="number-range">
				      <span>Number</span>
				      <input type="number" name="expectedAnswer" min="1" />
				    </div>
			    	<button onClick={saveQuestion}>Save</button>
				  </div>
			  </div>
			</div>
		</div>
	)
}

export default QuestionInput;
