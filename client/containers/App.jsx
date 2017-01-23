import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SignupLoginModal from '../components/SignupLoginModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.hideModal = this.hideModal.bind(this);
  }
  hideModal() {
    return this.props.dispatch(actions.hideModal());
  }
  render() {
    return (
      <div>
        {this.props.children}
        {
          this.props.modals.type == 'login' ? 
          <SignupLoginModal hideModal={this.hideModal}/>
          :
          null
        }
      </div>
    );
  }
}

function mapStateToProps(store) {
  return store;
};

App.propTypes = {
  children: React.PropTypes.node,
};

export default connect(mapStateToProps)(App);