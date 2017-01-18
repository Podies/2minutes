import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

//Import css
import '../public/stylesheets/client.scss';

render(
    <Provider store={store}>
      <Router children={routes} history={history} />
    </Provider>
  , document.getElementById('app')
  );