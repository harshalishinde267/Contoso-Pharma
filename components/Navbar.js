import React, { useContext, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../style/Navbar.css';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const navRef = useRef();
  const { isLoggedIn, logout } = useContext(AuthContext)
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  const hideNavbar = () => {
    setShowMenu(false);
  };

  const handleLogin = () => {
    setShowMenu(false);
  }

  return (
    <nav className="navbar">
      <h3 className="navbar-title">Contoso</h3>
      <button className="nav-btn" onClick={toggleNavbar}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`navbar-nav ${showMenu ? 'show' : ''}`} ref={navRef}>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" onClick={hideNavbar} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard" className="nav-link" onClick={hideNavbar} activeClassName="active">
            Clinical Dashboard
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="/product" className="nav-link dropdown-toggle" onClick={hideNavbar} activeClassName="active">
            Product
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/clinical" className="dropdown-link" activeClassName="active">
                Clinical Trial
              </NavLink>
            </li>
            <li>
              <NavLink to="/drug" className="dropdown-link" activeClassName="active">
                Drug Information
              </NavLink>
            </li>
            <li>
              <NavLink to="/distribution" className="dropdown-link" activeClassName="active">
                Distribution Network
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className="dropdown-link" activeClassName="active">
                News And Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/research" className="dropdown-link" activeClassName="active">
                Ongoing New Developments
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" onClick={hideNavbar} activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/career" className="nav-link" onClick={hideNavbar} activeClassName="active">
            Career
          </NavLink>
        </li>
        {!isLoggedIn && <li className="nav-item">
          <NavLink to="/login" className="nav-link" onClick={handleLogin} activeClassName="active">
            Login
          </NavLink>
        </li>}
        {isLoggedIn && <li className="nav-item">
          <a href='#' className="nav-link" onClick={handleLogout}>
            Logout
          </a>
        </li>}
      </ul>
    </nav>
  );
};

export default Navbar;

