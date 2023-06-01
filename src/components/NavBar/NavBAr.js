import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        ShareFlix By Ajay
      </div>
      <div className="nav-options">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">Movies</Link>
        <Link to="/" className="nav-link">TV Shows</Link>
        <Link to="/" className="nav-link">My List</Link>
        <Link to="/login" className="nav-link">Sign up</Link>
      </div>
      <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  );
}

export default NavBar;
