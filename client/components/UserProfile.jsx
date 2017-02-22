import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import * as actionCreators from '../actions/index';

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      showEditPassword: false,
      changePasswordError: '',
      changePasswordSuccess: '',
    };

    this.showEditPassword = this.showEditPassword.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  showEditPassword() {
    this.setState({
      showEditPassword: true,
    });
  }

  changePassword(e) {
    e.preventDefault();
    const currentPassword = this.currentPassword.value;
    const newPassword = this.newPassword.value;
    const confirmNewPassword = this.confirmNewPassword.value;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      this.setState({ changePasswordError: 'All fields are needed.' });
    }
    if (newPassword !== confirmNewPassword) {
      this.setState({ changePasswordError: 'Password do not match.' });
    }
    if (newPassword.length < 8) {
      this.setState({ changePasswordError: 'Pasword length should be atleast 8 characters.' });
    }
    this.props.dispatch(actionCreators.changePassword({
      password: currentPassword,
      newPassword,
      confirmPassword: confirmNewPassword,
    }))
      .then((res) => {
        if (res.status === 400) {
          this.setState({ changePasswordError: res.data.message });
        } else {
          this.setState({ changePasswordSuccess: 'Password Updated', showEditPassword: false });
        }
      });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="extended-profile-section">
          <div className="grid">
            <div className="row">
              <div className="col-xs-2"></div>
              <div className="col-xs-8 userinfo-sec">
                <div className="col-xs-4">
                  <div className="col img-sec">
                    <img src={this.props.activeUser.photo} alt={this.props.activeUser.name} />
                    <span><i className="fa fa-camera" aria-hidden="true" /></span>
                  </div>
                </div>
                <div className="col-xs-8">
                  <div className="col">
                    <table>
                      <thead>
                        <tr>
                          <th scope="col" colSpan="2">{this.props.activeUser.name}</th>
                        </tr>
                      </thead>
                      {!this.state.showEditPassword ?
                        <tbody>
                          <tr>
                            <td>Registered Email ID:</td>
                            <td>{this.props.activeUser.email}</td>
                          </tr>
                          <tr>
                            <td>Password: </td>
                            <td>Z****x</td>
                          </tr>
                        </tbody>
                      :
                        <tbody>
                          <tr>
                            <td>Registered Email ID:</td>
                            <td>{this.props.activeUser.email}</td>
                          </tr>
                          <tr>
                            <td>Password: </td>
                            <td>Z****x</td>
                          </tr>
                          <tr>
                            <td>Current Password: </td>
                            <td><input type="password" ref={(c) => { this.currentPassword = c; }} /></td>
                          </tr>
                          <tr>
                            <td>New Password: </td>
                            <td><input type="password" ref={(c) => { this.newPassword = c; }}/></td>
                          </tr>
                          <tr>
                            <td>Confirm New Password: </td>
                            <td><input type="password" ref={(c) => { this.confirmNewPassword = c; }} /></td>
                          </tr>
                        </tbody>
                      }
                    </table>
                    <div>{this.state.changePasswordError}</div>
                    <div>{this.state.changePasswordSuccess}</div>
                    <div className="col user-profile-save-btn">
                      <input type="submit" value="Save" onClick={this.changePassword} />
                    </div>
                    <span onClick={this.showEditPassword}><i className="fa fa-pencil edit-profile" aria-hidden="true" /></span>
                  </div>
                </div>
              </div>
              <div className="col-xs-2"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    activeUser: store.activeUser,
  };
}

UserProfile.propTypes = {
  activeUser: React.PropTypes.shape().isRequired,
  dispatch: React.PropTypes.func.isRequired,

};
export default connect(mapStateToProps)(UserProfile);
