import React, { Component } from 'react';
import UserDropDown from './UserDropDown';

class Accountinfo extends Component {
	constructor(props){
		super(props);
		this.state = {
			showDropDown: false,
		}
		this.toggleDropDown = this.toggleDropDown.bind(this);
	}

	toggleDropDown() {
    this.setState({ showDropDown: !this.state.showDropDown });
    console.log('called')
  }

	render() {
		return (
		  <div className="col-xs-10">
		    <div className="col">
		      <div className="account-info" onClick={this.toggleDropDown}>
		       <div className="user-name">
		        <p>Hi, {this.props.userName.split(' ')[0]}</p>
		       </div>
		       <div className="profile-img">
		        <img src="../images/IMG-20160101-WA0020.jpg"/>
		       </div>
		       {
		       	this.state.showDropDown ? <UserDropDown /> : null
		       }
		      </div>
		    </div>
		  </div>
		)
	}
}

export default Accountinfo;