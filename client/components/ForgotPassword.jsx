import React from 'react';


const ForgotPassword = () => {
	return(
      <div>
        <h1>Forgot Password?</h1>
        <p>Don't worry just enter your registered email Id below!</p>
        <input type="email"/>
        <p>We will send a password reset link.</p>
        <input type="submit" value="Send Me Reset Link"/>
      </div>
		)
}

export default ForgotPassword;