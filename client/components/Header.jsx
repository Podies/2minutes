import React, { Component } from 'react';
import SignupButton from './SignupButton';
import AccountInfo from './AccountInfo';
import { IndexLink } from 'react-router';
import SignupLoginModal from './SignupLoginModal';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import DashboardNavList from './DashboardNavList';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
		showLogin: false
		};
		this.showLoginModal = this.showLoginModal.bind(this);
		this.hideLogin = this.hideLogin.bind(this);
	}
	showLoginModal(e) {
		e.preventDefault();
		this.props.dispatch(actions.showModal({ type: 'login', info: '' }));
	}
	hideLogin() {
		this.setState({showLogin: false});
	}
	render(){
	  return (
	  	<div className="extended-header">
		  	<div className="grid">
		  	  <div className="row">
				    <div className="col-xs-12">
				      <header>
				        <div className="col-xs-2">
				          <div className="col">
				            <div className="logo-sec">
				            	<IndexLink to="/">
				            		<img src="../images/2-Minutes-Logo.svg"/>
				            	</IndexLink>
						        </div>
					        </div>
				        </div>
                <DashboardNavList />
				        {
				        	this.props.activeUser ? 
				        		<AccountInfo userName={this.props.activeUser.name} photo={this.props.activeUser.photo}/>
				        		:
				      			<SignupButton showLoginModal={this.showLoginModal}/>
				        }
				      	{
				      		this.state.showLogin ? 
				      		<SignupLoginModal hideLogin={this.hideLogin}/>
				      		:
				      		null
				      	}
				      </header> 
				    </div>
				  </div>
				</div>
		  </div>
	  )
	}
}

function mapStateToProps(state) {
	return {
		activeUser: state.activeUser
	}
}
export default connect(mapStateToProps)(Header);