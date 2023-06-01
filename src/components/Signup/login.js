import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="background-overlay"></div>
      <div className="login-content">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <input type="email" placeholder="Email" className="login-input" /><br></br>
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
