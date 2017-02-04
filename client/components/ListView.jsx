import React from 'react';

const ListView = (props) => {

  const changeDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0'+dd;
    } 
    if (mm < 10) {
      mm='0'+mm;
    }
    return yyyy+'-'+mm+'-'+dd+'T00:00:00.000Z'
  };

  const checkIfAnswered = () => {
    const today = changeDate();
    const index = props.question.answers.findIndex((answer, i) => {
      return answer.date == today;
    });
    return index != -1;
  };

  return (
    <div className="col-xs-12" >
      <div className="col-xs-1" />
        <div className="col-xs-10 saved-question" onClick={() => props.handleView(props.index)}>
          <div className="col">
            <h1 className={checkIfAnswered() ? 'question-heading answered' : 'question-heading'}>{props.question.name}</h1>
          </div>
        </div>
      <div className="col-xs-1" />
    </div>
  );
};

export default ListView;