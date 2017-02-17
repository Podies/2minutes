import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import UserProfile from './components/UserProfile';
import ReviewPage from './components/ReviewPage';
import ReviewHistory from './components/ReviewHistory';

export default(
  <Route component={App} path="/" >
    <IndexRoute component={Home} />
    <Route component={UserProfile} path="profile" />
    <Route component={ReviewPage} path="review" />
    <Route component={ReviewHistory} path="stats" />
  </Route>
);
