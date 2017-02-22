import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import ReviewPage from '../components/ReviewPage';

class Home extends Component {
  render() {
    return (
      <div>
        {
          !this.props.activeUser ?
            <Landing />
          :
            !this.props.userQuestions ?
              <Dashboard />
            :
              <ReviewPage />
        }
      </div>
    );
  }
}

Home.propTypes = {
  activeUser: React.PropTypes.shape(),
  userQuestions: React.PropTypes.shape(),
};

Home.defaultProps = {
  activeUser: null,
  userQuestions: null,
};

function mapStateToProps(store) {
  return store;
}

export default connect(mapStateToProps)(Home);
