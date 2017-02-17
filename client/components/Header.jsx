import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SignupButton from './SignupButton';
import AccountInfo from './AccountInfo';
import SignupLoginModal from './SignupLoginModal';
import DashboardNavList from './DashboardNavList';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
    };
    this.showLoginModal = this.showLoginModal.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
    this.dashboardNav = true;
  }
  showLoginModal(e) {
    e.preventDefault();
    this.props.dispatch(actions.showModal({ type: 'login', info: '' }));
  }

  hideLogin() {
    this.setState({ showLogin: false });
  }

  render() {
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
                        <img src="../images/2-Minutes-Logo.svg" alt="" />
                      </IndexLink>
                    </div>
                  </div>
                </div>
                {
                  this.props.activeUser ?
                    <DashboardNavList />
                    :
                    null
                }
                {
                  this.props.activeUser ?
                    <AccountInfo
                      userName={this.props.activeUser.name}
                      dispatch={this.props.dispatch}
                      photo={this.props.activeUser.photo}
                    />
                    :
                    <SignupButton
                      showLoginModal={this.showLoginModal}
                    />
                }
                {
                  this.state.showLogin ?
                    <SignupLoginModal hideLogin={this.hideLogin} />
                    :
                    null
                }
              </header>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  activeUser: React.PropTypes.shape().isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    activeUser: state.activeUser,
  };
}
export default connect(mapStateToProps)(Header);