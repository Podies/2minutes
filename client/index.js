import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Router, browserHistory } from 'react-router';

//Import css
import '../public/stylesheets/client.scss';

render(
    <Router routes={routes} history={browserHistory} />
  , document.getElementById('app')
  );