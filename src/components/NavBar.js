import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect } from "react";


const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [userName,setUserName] = useState('');
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const location = useLocation();

    return (
      <nav className="navbar navbar-expand-md ">
        <button
          className="navbar-toggler navbar-dark "
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-dark" />
        </button>
  <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to="/home"
                className="nav-link"
                activeClassName="currentpage"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/signup"
                className="nav-link"
                activeClassName="currentpage"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );

};

export default NavBar;
