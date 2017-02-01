import React from 'react';

const ListView = (props) => {
  return (
    <div className="col-xs-12" >
      <div className="col-xs-1" />
      <div className="col-xs-10 saved-question">
        <div className="col" onClick={() => props.handleView(props.index)} >
          <h1 className="question-heading">{props.question.name}</h1>
        </div>
      </div>
      <div className="col-xs-1" />
    </div>
  );
};

export default ListView;