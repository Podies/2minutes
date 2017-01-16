import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
require('../public/stylesheets/client.scss');

render(
    <Header/>
    <div className="grid">
      <div className="row">
        <div className="col-xs-12">
          <div className="hero-sec">
            <div className="col-xs-6">
              <div className="col-xs-12">
              </div>
              <div className="col-xs-12">
                <h1>Take charge, and be better version of yourself.</h1>
                <p>Lorem ipsum Sed pariatur nulla dolore ex Duis non nostrud voluptate est laboris elit id officia dolor in velit cillum qui dolor exercitation consequat nostrud id nostrud voluptate tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
