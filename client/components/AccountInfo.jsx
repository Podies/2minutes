import React, { Component } from 'react';
import UserDropDown from './UserDropDown';

class Accountinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  toggleDropDown() {
    this.setState({ showDropDown: !this.state.showDropDown });
  }

  handleBodyClick(e) {
    const userDropdown = document.getElementById('user-dropdown');
    if (!userDropdown) {
      return null;
    } else if (!userDropdown.contains(e.target)) {
      this.setState({ showDropDown: false });
    }
  }

  render() {
    return (
      <div className="col-xs-2">
        <div className="col">
          <div className="account-info" onClick={this.toggleDropDown} >
            <div className="user-name">
              <p>Hi, {this.props.userName.split(' ')[0]}</p>
            </div>
            <div className="profile-img">
              <img src={this.props.photo} alt="" />
            </div>
            {
              this.state.showDropDown ?
                <UserDropDown
                  dispatch={this.props.dispatch}
                  toggleDropDown={this.toggleDropDown}
                />
                :
                null
            }
          </div>
        </div>
      </div>
    );
  }
}

Accountinfo.propTypes = {
  userName: React.PropTypes.string.isRequired,
  photo: React.PropTypes.string,
  dispatch: React.PropTypes.func.isRequired,
};

Accountinfo.defaultProps = {
  photo: '',
};

export default Accountinfo;
