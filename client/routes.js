import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';

export default(
  <Route component={App} path="/" >
    <IndexRoute component={Landing} />
    <Route component={Dashboard} path="dashboard" />
    <Route component={UserProfile} path="profile" />
  </Route>
);
