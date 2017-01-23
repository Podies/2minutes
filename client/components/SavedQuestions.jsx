import React from 'react';

const SavedQuestions = (props) => {
  return (
    <div>
    {
      props.questions.length > 0 ?
        props.questions.map((question, i) => {
          return (
            <div key={i}>
              <h4>{question.name}</h4>
              <p>{question.userPreference.value}</p>
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