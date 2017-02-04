import React from 'react';
import { Link } from 'react-router';
import * as actionCreators from '../actions';

const UserDropDown = (props) => {

  const handleBodyClick = (e) => {
    const userDropdown = document.getElementById('user-dropdown');

    if (!userDropdown.contains(e.target)) {
      removeEvent();
      props.toggleDropDown();
    } else {
      removeEvent();
    }
  };

  const logout = () => {
    props.dispatch(actionCreators.logoutUser());
  };

  const eventListener = () => {
    document.body.addEventListener('click', handleBodyClick, false);
  };

  const removeEvent = () => {
    document.body.removeEventListener('click', handleBodyClick, false);
  };
  eventListener();

  return (
    <ul className="user-profile-menu" id="user-dropdown">
      <li><Link to="/profile"><i className="fa fa-user-circle-o" aria-hidden="true" />Profile</Link></li>
      <li><Link to=""><i className="fa fa-bar-chart" aria-hidden="true" />Stats</Link></li>
      <li><Link to="/"><i className="fa fa-list-ul" aria-hidden="true" />Questions</Link></li>
      <li onClick={logout}><Link to="#"><i className="fa fa-power-off" aria-hidden="true" />Log Out</Link></li>
    </ul>
  );
}

export default UserDropDown;