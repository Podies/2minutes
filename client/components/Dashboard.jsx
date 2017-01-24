import React from 'react';
import Header from './Header';
import Calendar from './Calendar';
import Questions from './Questions';
import Footer from './Footer';

const Dashboard = () => {
	return (
	<div>
    	<Header />
    	<div className="grid">
    	  <div className="row">
	    	  <div className="col-xs-12 dashboard-wrapper">
		    	  <Questions />
            {/*<Calendar />*/}
	    	  </div>
    	  </div>
    	</div>
        <Footer />
    </div>
	)
}

export default Dashboard;