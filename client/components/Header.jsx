import React from 'react';
import Signupbutton from './Signupbutton';

const Header = () => {
  return (
  	<div className="extended-header">
	  	<div className="grid">
	  	  <div className="row">
			    <div className="col-xs-12">
			      <header>
			        <div className="col-xs-2">
			          <div className="col">
			            <div className="logo-sec">
					          <img src="../images/2-Minutes-Logo.svg"/>
					        </div>
				        </div>
			        </div>
			        <Signupbutton />
			      </header> 
			    </div>
			  </div>
			</div>
	  </div>
  )
}

export default Header;