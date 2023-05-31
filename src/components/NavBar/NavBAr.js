import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        ShareFlix By Ajay
      </div>
      <div className="nav-options">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Movies</a>
        <a href="#" className="nav-link">TV Shows</a>
        <a href="#" className="nav-link">My List</a>
        <a href="#" className="nav-link">Sign up</a>
      </div>
      <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  );
}

export default NavBar;
