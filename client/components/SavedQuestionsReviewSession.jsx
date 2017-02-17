import React, { Component } from 'react';
import ExpandedView from './ExpandedView';
import ListView from './ListView';

class SavedQuestionsReviewSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedViewId: '',
    };
    this.handleView = this.handleView.bind(this);
    this.answerAdded = this.answerAdded.bind(this);
  }

  handleView(index) {
    this.setState({ expandedViewId: index });
    this.props.closeAddQuestion();
  }

  answerAdded() {
    this.setState({ expandedViewId: false });
  }

  render() {
    return (
      <div className="row">
        {
          this.props.questions.length > 0 ?
            this.props.questions.map((question, i) => {
              return (
                this.state.expandedViewId === i && !this.props.showAddQuestion ?
                  <ExpandedView
                    key={i}
                    question={question}
                    dispatch={this.props.dispatch}
                    answerAdded={this.answerAdded}
                  />
                :
                  <ListView
                    key={i}
                    index={i}
                    question={question}
                    handleView={this.handleView}
                  />
              );
            })
          :
            null
        }
      </div>
    );
  }
}

SavedQuestionsReviewSession.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  closeAddQuestion: React.PropTypes.func.isRequired,
  questions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  showAddQuestion: React.PropTypes.bool.isRequired,
};

export default SavedQuestionsReviewSession;
