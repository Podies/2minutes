import React, { Component } from 'react';
import ExpandedView from './ExpandedView';
import ListView from './ListView';

class SavedQuestionsReviewSession extends Component {
  constructor(props){
    super(props);
    this.state = {
      expandedViewId: '0',
    };
    this.handleView = this.handleView.bind(this);
  }
  handleView(index) {
    this.setState({
      expandedViewId: index,
    });
  }
  render() {
    return (
      <div className="row">
        {
          this.props.questions.length > 0 ?
            this.props.questions.map((question, i) => {
              return (
                this.state.expandedViewId == i ?
                  <ExpandedView key={i} question={question} />           
                :
                  <ListView key={i} index={i} question={question} handleView={this.handleView} />
              );
            })
          :
            null
        }
      </div>
    );
  }
};


export default SavedQuestionsReviewSession;