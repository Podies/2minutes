import React from 'react';

const Signupbutton = (props) => {
  return (
    <div className="col-xs-10">
      <div className="col-xs-9" />
      <div className="col-xs-3">
        <div className="col get-started-btn">
          <a href="#" className="get-started" id="signupbtn" onClick={props.showLoginModal}>Log In/Sign Up</a>
        </div>
      </div>
    </div>
  );
};

Signupbutton.propTypes = {
  showLoginModal: React.PropTypes.func.isRequired,
};

export default Signupbutton;
