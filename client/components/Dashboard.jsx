import React from 'react';
import Header from './Header';

const Dashboard = () => {
	return (
		<div>
    	<Header />
    	<div className="grid">
    	  <div className="row">
    	    <div className="col-xs-4">
    	      <div className="page-tabs">
    	        <div className="my-question-tab col-xs-6">
    	          <div className="col">
    	            <a href="#">My Questions</a>
    	          </div>
    	        </div>
    	        <div className="my-stats col-xs-6">
    	          <div className="col">
    	            <a href="#">My Stats</a>
    	          </div>
    	        </div>
    	      </div>
    	    </div>
    	    <div className="col-xs-10">
    	    </div>
    	  </div>
    	</div>
    </div>
	)
}

export default Dashboard;