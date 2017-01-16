import React from 'react';
import Header from './Header';
import Signuploginmodal from './Signuploginmodal';


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
	                <div className="illustration001">
	                </div>
	              </div>
	              <div className="col-xs-12">
		              <div className="col">
		                <h1>Take charge, and be better version of yourself.</h1>
		                <p>Lorem ipsum Sed pariatur nulla dolore ex Duis non nostrud voluptate est laboris elit id officia dolor in velit cillum qui dolor exercitation consequat nostrud id nostrud voluptate tempor.
		                </p>
		              </div>
	              </div>
	              <div className="col-xs-12">
	               <div className="col get-started-btn">
	                <a href="#" className="get-started">Get Started</a>
	               </div>
	              </div>
	            </div>
	            <div className="col-xs-6">
	            </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <Signuploginmodal />
	  </div>
	);
}

export default Landing;
   