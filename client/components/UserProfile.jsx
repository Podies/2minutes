import React from 'react';
import Header from './Header';
import Footer from './Footer';


const UserProfile = () => {
	return(
    <div>
      <Header />
      <div className="extended-profile-section">
        <div className="grid">
          <div className="row">
            <div className="col-xs-2"></div>
            <div className="col-xs-8 userinfo-sec">
	            <div className="col-xs-4">
	              <div className="col img-sec">
	                <img src="../images/sachin.png"/>
	                <span><i className="fa fa-camera" aria-hidden="true"></i></span>
	              </div>
	            </div>
	            <div className="col-xs-8">
		            <div className="col">
		              <table>
		                <thead>
			                <tr>
			                  <th scope="col" colSpan="2">Sachin Kumaar</th>
			                </tr>
			              </thead>
			              <tbody>
			                <tr>
			                  <td>Registered Email ID:</td>
			                  <td>sachinkumaar91@gmail.com</td>
			                </tr>
			                <tr>
			                  <td>Password: </td>
			                  <td>Z****x</td>
			                </tr>
			                <tr>
			                  <td>Current Password: </td>
			                  <td><input type="password"/></td>
			                </tr>
			                <tr>
			                  <td>New Password: </td>
			                  <td><input type="password"/></td>
			                </tr>
			              </tbody>
		              </table>
		              <div className="col user-profile-save-btn">
		                <input type="submit" value="Save"/>
		              </div>
		              <span><i className="fa fa-pencil edit-profile" aria-hidden="true"></i></span>
		            </div>
              </div>
            </div>
            <div className="col-xs-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
	)
}

export default UserProfile;