import React, { Component } from 'react';
import * as api from '../actions/apiCalls';
import QuestionInput from './QuestionInput';
import { connect } from 'react-redux';
import * as actionCreator from '../actions/index';
import ExpandedView from './ExpandedView';
import UserGreetingReviewSession from './UserGreetingReviewSession';
import SavedQuestionsReviewSession from './SavedQuestionsReviewSession';

class Review extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAddQuestion: false,
    };
    this.showAddQuestion = this.showAddQuestion.bind(this);
  }

  componentWillMount() {
    if (this.props.activeUser) {
      this.props.dispatch(actionCreator.fetchUserQuestionSet(this.props.activeUser._id));
    } else {
      return this.context.router.push('/');
    }
  }

  showAddQuestion(e) {
    e.preventDefault();
    this.setState({ showAddQuestion: !this.state.showAddQuestion });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <UserGreetingReviewSession showAddQuestion={this.showAddQuestion} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="all-questions">
              <div className="question-sec">
                {
                  this.state.showAddQuestion ?
                    <QuestionInput
                      activeUser={this.props.activeUser}
                      dispatch={this.props.dispatch}
                    />
                  :
                    null
                }
              </div>
              <SavedQuestionsReviewSession
                questions={this.props.userQuestions.questions}
                showAddQuestion={this.state.showAddQuestion}
                dispatch={this.props.dispatch}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Review.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

function mapStateToProps(store) {
  return store;
}

export default connect(mapStateToProps)(Review);