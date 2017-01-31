import React from 'react';


const ReviewQuestions = () => {
  return (
    <div>
      <div className="grid">
        <div className="row">
          <div className="col-xs-12">
            <div className="col">
              <h1 className="active-question-head">This is the question that I will give feedback on?</h1>
              <div className="your-ans">
                <p>Your Answer</p>
                <div className="yes-no-toggle-sec">
                  <input type="radio" name="expectedAnswer" value="true" id="switch_yes"/>
                  <label htmlFor="switch_yes">Yes</label>
                  <input type="radio" name="expectedAnswer" value="false" id="switch_no"/>
                  <label htmlFor="switch_no">No</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewQuestions;