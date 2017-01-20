import React from 'react';

const Accountinfo = (props) => {
	return (
	  <div className="col-xs-10">
	    <div className="col">
	      <div className="account-info">
	       <div className="user-name">
	        <p>Hi, {props.userName.split(' ')[0]}</p>
	       </div>
	       <div className="profile-img">
	        <img src="../images/IMG-20160101-WA0020.jpg"/>
	       </div>
	      </div>
	    </div>
	  </div>
	)
}

export default Accountinfo;