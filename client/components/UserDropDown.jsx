import React from 'react';

const UserDropDown = () => {
  return (
    <ul className="user-profile-menu">
      <li><a  href=""><i className="fa fa-user-circle-o" aria-hidden="true"></i>Profile</a></li>
      <li><a  href=""><i className="fa fa-bar-chart" aria-hidden="true"></i>Stats</a></li>
      <li><a href=""><i className="fa fa-list-ul" aria-hidden="true"></i>Questions</a></li>
      <li><a href=""><i className="fa fa-list-ul" aria-hidden="true"></i>Log Out</a></li>
    </ul>
  );
}

export default UserDropDown;