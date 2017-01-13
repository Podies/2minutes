import React from 'react';
import { render } from 'react-dom';
import Landing from './components/Landing';
require('../public/stylesheets/client.scss');
render(
    <Landing />
  , document.getElementById('app')
  );