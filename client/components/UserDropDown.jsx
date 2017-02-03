import React from 'react';
import { Link } from 'react-router';

const UserDropDown = (props) => {

  const handleBodyClick = (e) => {
    const userDropdown = document.getElementById('user-dropdown');

    if (!userDropdown.contains(e.target)) {
      removeEvent();
      props.toggleDropDown();
    } else {
      removeEvent();
    }
  }

  const eventListener = () => {
    document.body.addEventListener('click', handleBodyClick, false);
  }

  const removeEvent = () => {
    document.body.removeEventListener('click', handleBodyClick, false);
  }
  
  eventListener();

  return (
    <ul className="user-profile-menu" id="user-dropdown">
      <li><Link to="/profile"><i className="fa fa-user-circle-o" aria-hidden="true"></i>Profile</Link></li>
      <li><Link to=""><i className="fa fa-bar-chart" aria-hidden="true"></i>Stats</Link></li>
      <li><Link to="/"><i className="fa fa-list-ul" aria-hidden="true"></i>Questions</Link></li>
      <li><Link to=""><i className="fa fa-power-off" aria-hidden="true"></i>Log Out</Link></li>
    </ul>
  );
}

export default UserDropDown;