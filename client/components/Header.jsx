import React from 'react';
import SignupButton from './SignupButton';
import AccountInfo from './AccountInfo';
import { Link } from 'react-router';

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
			            	<Link to="/">
			            		<img src="../images/2-Minutes-Logo.svg"/>
			            	</Link>
					        </div>
				        </div>
			        </div>
			        <AccountInfo />
			      {/*<SignupButton />*/}
			      </header> 
			    </div>
			  </div>
			</div>
	  </div>
  )
}

export default Header;