import React from 'react';
import * as actionCreators from '../actions/index';

const SavedQuestions = (props) => {
  const handleUserPreference = (userPreferencevalue) => {
    switch (userPreferencevalue) {
      case 'true':
        return 'Yes';
      case 'false':
        return 'No';
      default:
        return userPreferencevalue;
    }
  };
  const deleteQuestion = (id) => {
    const deleteValue = confirm('Are you sure you wanted to delete this question?');
    if (deleteValue) {
      return props.dispatch(actionCreators.deleteQuestion(id));
    }
    return null;
  };
  return (
    <div>
      {
        props.questions.length > 0 ?
          props.questions.map((question, i) => {
            return (
              <div className="row" key={i}>
                <div className="col-xs-1">
                </div>
                <div className="col-xs-10 saved-question">
                  <div className="col">
                    <div className="" key={i}>
                      <h1 className="question-heading">{question.name}</h1>
                      <p className="your-expected-answer">
                        {
                          handleUserPreference(question.userPreference.value)
                        }
                      </p>
                    </div>
                    <span className="question-action-sec">
                      <span className="delete"><i className="fa fa-trash-o" aria-hidden="true" />  Delete</span>
                    </span>
                  </div>
                </div>
                <div className="col-xs-1" />
              </div>
            );
          })
        :
        null
      }
    </div>
  );
};

SavedQuestions.propTypes = {
  questions: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default SavedQuestions;
