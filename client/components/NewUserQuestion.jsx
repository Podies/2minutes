import React from 'react';
import { Link } from 'react-router';


const NewUserQues = () => {
  return (
    <div>
      <div className="row">
        <div className="greetings-cum-action">
          <div className="col-xs-12">
            <div className="col">
              <p className="page-intro">Let's prepare a set questions that you would like to answer and review daily !</p>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="col-xs-10" />
            <div className="col-xs-2">
              <div className="col to-review">
                <Link href="/review" className="next-button"><i className="fa fa-arrow-right" aria-hidden="true" /> All Set</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUserQues;
