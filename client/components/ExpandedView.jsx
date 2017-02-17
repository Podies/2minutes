import React, { Component } from 'react';
import * as actionCreators from '../actions/index';

class ExpandedView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: '',
      questionId: '',
      addAnswerError: '',
      addAnswerSuccess: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const deleteQuestion = confirm('Are you sure you wanted to delete this question?');
    if (deleteQuestion)
      return this.props.dispatch(actionCreators.deleteQuestion(this.props.question._id));
    else
      return null;
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ userAnswer: e.target.value });
    this.setState({ questionId: this.props.question._id });
  }

  handleSave(e) {
    e.preventDefault();
    this.state.userAnswer ? 
      this.props.dispatch(actionCreators.addAnswer(this.state.questionId, this.state.userAnswer))
        .then((res) => {
          if (res.status === 400) {
            this.setState({ addAnswerError: res.data.message });
          } else {
            this.setState({ addAnswerSuccess: 'Answer Added', userAnswer: '', questionId: '', addAnswerError: '', });
            this.props.answerAdded();
          }
        })
      :
        this.setState({ addAnswerError: 'Answer field should not be blank.' })
  }
  render() {
    return (
      <div>
        <div className="grid">
          <div className="row">
            <div className="col-xs-12 expanded-view">
              <div className="col">
                <h1 className="active-question-head">{this.props.question.name}</h1>
                <div className="your-ans">
                  <p>Your Answer</p>
                  <div className="all-input-sec">
                    {
                      this.props.question.userPreference.type == 'boolean' ?
                        <div className="yes-no-toggle-sec">
                          <input type="radio" name="userAnswer" value="true" id="switch_yes" onChange={this.handleChange} className={this.state.userAnswer === 'true' ? 'active' : ''} />
                          <label htmlFor="switch_yes">Yes</label>
                          <input type="radio" name="userAnswer" value="false" id="switch_no" onChange={this.handleChange} className={this.state.userAnswer === 'false' ? 'active' : ''} />
                          <label htmlFor="switch_no">No</label>
                        </div>
                      :
                        <div className="number-range-review">
                          <span>Number</span>
                          <input type="number" onChange={this.handleChange} name="expectedAnswer" id="number-input" min="1" />
                        </div>
                    }
                    <div className="question-action-sec-review">
                      <span className="save" onClick={this.handleSave}><i className="fa fa-check" aria-hidden="true" />  Save</span>
                      <span className="delete" onClick={this.handleDelete}><i className="fa fa-trash-o" aria-hidden="true" />  Delete</span>
                    </div>
                  </div>
                  <div>{this.state.addAnswerError || this.state.addAnswerSuccess}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpandedView;