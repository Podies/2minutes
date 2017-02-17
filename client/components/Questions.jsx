import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionInput from './QuestionInput';
import NewUserQuestion from './NewUserQuestion';
import SavedQuestions from './SavedQuestions';
import * as actionCreator from '../actions/index';

class Questions extends Component {

  componentWillMount() {
    if (this.props.activeUser) {
      this.props.dispatch(actionCreator.fetchUserQuestionSet(this.props.activeUser._id));
    } else {
      return this.context.router.push('/');
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <NewUserQuestion />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="all-questions">
              <div className="question-sec">
                <QuestionInput
                  activeUser={this.props.activeUser}
                  dispatch={this.props.dispatch}
                />
              </div>
              <SavedQuestions
                questions={this.props.userQuestions.questions}
                dispatch={this.props.dispatch}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Questions.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

Questions.propTypes = {
  activeUser: React.PropTypes.shape().isRequired,
  dispatch: React.PropTypes.func.isRequired,
  userQuestions: React.PropTypes.shape().isRequired,
};

function mapStateToProps(store) {
  return store;
}

export default connect(mapStateToProps)(Questions);