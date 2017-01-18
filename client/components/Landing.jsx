import React, { Component } from 'react';
import Header from './Header';

const Landing = () => {
	return (
		<div>
			<Header />
			<div className="hero-sec">
				<div className="grid">
		      <div className="row">
		        <div className="col-xs-12">
	            <div className="col-xs-6">
	              <div className="col-xs-12">
		              <div className="col">
		                <div className="illustration001">
		                  <img src="../images/maxresdefault.jpg" className="hero-illustration"/>
		                </div>
		              </div>
	              </div>
	              <div className="col-xs-12">
		              <div className="col">
		                <h1 className="hero-heading">Take charge, and be better version of yourself.</h1>
		                <p className="hero-description">Lorem ipsum Sed pariatur nulla dolore ex Duis non nostrud voluptate est laboris elit id officia dolor in velit cillum qui dolor exercitation consequat nostrud id nostrud voluptate tempor.
		                </p>
		              </div>
		            </div>
		            <div className="col-xs-6">
		            </div>
			        </div>
			      </div>
			    </div>
			  </div>
		  </div>
		</div>
	);
}

export default Landing;
   