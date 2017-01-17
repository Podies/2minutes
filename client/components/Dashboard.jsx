import React from 'react';
import Header from './Header';
import Calendar from './Calendar';

const Dashboard = () => {
	return (
		<div>
    	<Header />
    	<div className="grid">
    	  <div className="row">
	    	  <div className="col-xs-12 dashboard-wrapper">
		    	  <div className="col-xs-12 nav-menu">
		    	    <div className="col-xs-4">
			  	       <div className="col">
				  	        <ul className="nav-tabs">
				  	          <li><a href="#" className="my-questions">My Questions</a></li>
				  	          <li><a href="#" className="my-stats">My Stats</a></li>
				  	        </ul>
			  	       </div>
		    	    </div>
		    	    <div className="col-xs-8">
		    	    </div>
		    	  </div>
            <Calendar />
	    	  </div>
    	  </div>
    	</div>
    </div>
	)
}

export default Dashboard;