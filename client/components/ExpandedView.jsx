import React, { Component } from 'react';
import * as actionCreators from '../actions/index';

class ExpandedView extends Component {
  constructor(props){
    super(props);
    this.state = {
      userAnswer: '',
      questionId: '',
      addAnswerError: '',
      addAnswerSuccess: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ userAnswer: e.target.value });
    this.setState({ questionId: this.props.question._id });
  }
  handleSave(e) {
    e.preventDefault();
    this.props.dispatch(actionCreators.addAnswer(this.state.questionId, this.state.userAnswer))
      .then((res) => {
        if (res.status == 400) {
          this.setState({addAnswerError: res.data.message});
        } else {
          this.setState({ addAnswerSuccess: 'Answer Added', userAnswer: '', questionId: ''});
        }
      });
  }
  render(){
    return (
    <div>
      <div className="grid">
        <div className="row">
          <div className="col-xs-12">
            <div className="col">
              <h1 className="active-question-head">{this.props.question.name}</h1>
              <div className="your-ans">
                <p>Your Answer</p>
                <div className="all-input-sec" onChange={this.handleChange}>
                  {
                    this.props.question.userPreference.type == "boolean" ?
                      <div className="yes-no-toggle-sec">
                        <input type="radio" name="expectedAnswer" value="true" id="switch_yes" />
                        <label htmlFor="switch_yes">Yes</label>
                        <input type="radio" name="expectedAnswer" value="false" id="switch_no" />
                        <label htmlFor="switch_no">No</label>
                      </div>
                    :
                      <div className="number-range">
                        <span>Number</span>
                        <input type="number" name="expectedAnswer" id="number-input" min="1" />
                      </div>
                  }
                  <button className="save" onClick={this.handleSave}><i className="fa fa-check" aria-hidden="true"></i>  Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
};

export default ExpandedView;