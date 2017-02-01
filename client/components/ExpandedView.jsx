import React from 'react';
import * as api from '../actions/apiCalls';

const ExpandedView = (props) => {
  return (
    <div>
      <div className="grid">
        <div className="row">
          <div className="col-xs-12 expanded-view">
            <div className="col">
              <h1 className="active-question-head">{props.question.name}</h1>
              <div className="your-ans">
                <p>Your Answer</p>
                <div className="all-input-sec">
                  {
                    props.question.userPreference.type == "boolean" ?
                      <div className="yes-no-toggle-sec">
                        <input type="radio" name="expectedAnswer" value="true" id="switch_yes"/>
                        <label htmlFor="switch_yes">Yes</label>
                        <input type="radio" name="expectedAnswer" value="false" id="switch_no"/>
                        <label htmlFor="switch_no">No</label>
                      </div>
                    :
                      <div className="number-range-review">
                        <span>Number</span>
                        <input type="number" name="expectedAnswer" id="number-input" min="1"/>
                      </div>
                  }
                  <div className="question-action-sec-review">
                    <span className="save"><i className="fa fa-check" aria-hidden="true"></i>  Save</span>
                    <span className="delete"><i className="fa fa-trash-o" aria-hidden="true"></i>  Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedView;