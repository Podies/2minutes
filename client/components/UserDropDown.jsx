import React from 'react';
import { Link } from 'react-router';

const UserDropDown = () => {
  return (
    <ul className="user-profile-menu">
      <li><Link  to=""><i className="fa fa-user-circle-o" aria-hidden="true"></i>Profile</Link></li>
      <li><Link  to=""><i className="fa fa-bar-chart" aria-hidden="true"></i>Stats</Link></li>
      <li><Link to=""><i className="fa fa-list-ul" aria-hidden="true"></i>Questions</Link></li>
      <li><Link to="#"><i className="fa fa-list-ul" aria-hidden="true"></i>Log Out</Link></li>
    </ul>
  );
}

export default UserDropDown;