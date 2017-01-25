import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';


const UserProfile = (props) => {
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
	                <img src={props.activeUser.photo} alt={props.activeUser.name} />
	                <span><i className="fa fa-camera" aria-hidden="true"></i></span>
	              </div>
	            </div>
	            <div className="col-xs-8">
		            <div className="col">
		              <table>
		                <thead>
			                <tr>
			                  <th scope="col" colSpan="2">{props.activeUser.name}</th>
			                </tr>
			              </thead>
			              <tbody>
			                <tr>
			                  <td>Registered Email ID:</td>
			                  <td>{props.activeUser.email}</td>
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

function mapStateToProps(store) {
  return {
    activeUser: store.activeUser
  }
}
export default connect(mapStateToProps)(UserProfile);