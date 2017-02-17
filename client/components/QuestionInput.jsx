import React, { Component } from 'react';
import * as actionCreators from '../actions/index';


class QuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expectedAnswer: '',
      questionError: '',
    };
    this.saveQuestion = this.saveQuestion.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  saveQuestion(e) {
    e.preventDefault();
    if (!this.question.value || !this.state.expectedAnswer) {
      if (!this.question.value) {
        this.setState({ questionError: 'Question is needed' });
      } else {
        this.setState({ questionError: 'Expected answer is needed' });
      }
    } else {
      const userInput = {
        name: this.question.value,
        userPreference: this.state.expectedAnswer,
        userId: this.props.activeUser._id,
      };
      this.props.dispatch(actionCreators.addNewQuestion(userInput));
      this.question.value = '';
      this.setState({ expectedAnswer: '' });
    }
  }

  updateAnswer(e) {
    if (e.target.value === 'true' || e.target.value === 'false') {
      document.getElementById('number-input').value = '';
    }
    this.setState({ expectedAnswer: e.target.value });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="col">
          {
            this.props.showCrossButton ?
              <div onClick={this.props.closeAddQuestion}>XX</div>
              :
              ''
          }
            <input type="text" className="question" name="name" ref={(c) => { this.question = c; }} placeholder="Eg.Talk to family members every week." />
            <div className="expected-ans">
              <p>Your Expected Answer</p>
              <div>{this.state.questionError}</div>
              <div className="all-input-sec" onChange={this.updateAnswer}>
                <div className="yes-no-toggle-sec">
                  <input type="radio" name="expectedAnswer" value="true" id="switch_yes" checked={this.state.expectedAnswer == 'true' ? true : false} />
                  <label htmlFor="switch_yes">Yes</label>
                  <input type="radio" name="expectedAnswer" value="false" id="switch_no" checked={this.state.expectedAnswer == 'false' ? true : false} />
                  <label htmlFor="switch_no">No</label>
                </div>
                <div className="number-range">
                  <span>Number</span>
                  <input type="number" name="expectedAnswer" id="number-input" min="1" />
                </div>
                <span className="question-action-sec" onClick={this.saveQuestion}>
                  <span className="save"><i className="fa fa-check" aria-hidden="true" />  Save</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default QuestionInput;
