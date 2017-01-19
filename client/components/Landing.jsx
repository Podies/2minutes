import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';


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
		                <div className="hero-illustration-sec">
		                  <img src="../images/maxresdefault.png" className="hero-illustration"/>
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
			        </div>
			        <div className="col-xs-6 intro-video">
	              <div className="col">
	                <iframe width="560" height="315" src="https://www.youtube.com/embed/-MxxzK0oZY8" frameBorder="0" allowFullScreen>
	                </iframe>
	              </div>
		          </div>
			      </div>
			    </div>
			  </div>
		  </div>
		  <div className="grid">
		    <div className="row">
		      <div className="col-xs-12 walkthrough-sec-1">
		        <div className="product-learning-1 col-xs-6">
		          <div className="col">
		            <h1>Set Your Goals</h1>
		            <p>Create your set of own individual questions and their ideal case answers. 
		               Set your goals, whatever they are long term or short term.
		            </p>
		          </div>
		        </div>
		        <div className="illustration-1-sec col-xs-6">
		          <div className="col">
		            <img src="../images/maxresdefault.png" className="illustration-1"/>
		          </div>
		        </div>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-xs-12 walkthrough-sec-2">
		        <div className="illustration-2-sec col-xs-6">
		          <div className="col">
		            <img src="../images/maxresdefault.png" className="illustration-2"/>
		          </div>
		        </div>
		        <div className="product-learning-2 col-xs-6">
		          <div className="col">
		            <h1>Answer,Review and Edit</h1>
		            <p>Answer your questions on daily basis and review them. If you want to change your questions/goals, you can change them anytime as per your wish.
		            </p>
		          </div>
		        </div>
		      </div>
		    </div>
		    <div className="row">
		      <div className="col-xs-12 walkthrough-sec-3">
		        <div className="product-learning-3 col-xs-6">
		          <div className="col">
		            <h1>Check,Track and Achieve Success</h1>
		            <p>We provide you with deep easy,understandable data statistics about your progress and performance.
		            This helps you keep track of your progress and addressing your weakness, which is key to success!
		            </p>
		          </div>
		        </div>
		        <div className="illustration-3-sec col-xs-6">
		          <div className="col">
		            <img src="../images/maxresdefault.png" className="illustration-3"/>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <Footer />
		</div>
	);
}

export default Landing;
   