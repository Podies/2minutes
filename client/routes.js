import React from 'react';
import App from './components/App';
import { Route, IndexRoute } from 'react-router';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

export default (
  <Route component={App} path="/" >
    <IndexRoute component={Landing} />
    <Route component={Dashboard} path="dashboard" />
  </Route>
);
