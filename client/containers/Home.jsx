import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SignupLoginModal from '../components/SignupLoginModal';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {!this.props.activeUser ? 
          <Landing />
        :
          <Dashboard />
        }
      </div>
    );
  }
}

function mapStateToProps(store) {
  return store;
};

export default connect(mapStateToProps)(Home);