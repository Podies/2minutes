import React from 'react';


const UserGreetingReviewSession = (props) => {
  return (
    <div>
      <div className="col-xs-12">
        <div className="col">
          <h1 className="feedback-greeting">Hey! Howdy, let's begin your feedback session ☺</h1>
        </div>
      </div>
      <div className="col-xs-12 meta-details">
        <div className="col-xs-3" onClick={props.showAddQuestion}>
          <div className="col">
            <span className="add-question">
              <i className="fa fa-plus" aria-hidden="true" />
              Add Question
            </span>
          </div>
        </div>
        <div className="col-xs-8" />
        <div className="col-xs-1">
          <div className="col  date-sec">
            <p className="month-name">January,</p>
            <p className="daily-date"><span>21</span><sup>st</sup></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGreetingReviewSession;