import React from 'react';

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
  }
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
                     <span className="delete"><i className="fa fa-trash-o" aria-hidden="true"></i>  Delete</span>
                  </span>
                </div>
              </div>
              <div className="col-xs-1">
              </div>
            </div>
          )     
        })
      :
      null
    }
    </div>
  );
};

export default SavedQuestions;