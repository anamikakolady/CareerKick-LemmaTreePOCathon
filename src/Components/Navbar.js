import React from "react";
import { Link } from "react-router-dom";
import "../ComponentsCSS/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <a className="CareerKick">
          <FontAwesomeIcon className="fa-briefcase" icon={faBriefcase} />
          CareerKick
        </a>
        <div className="navbar-headers">
          <li className="navbar-list">
            <Link className="navbar-item" to="/">
              Home
            </Link>
          </li>

          <li className="navbar-list">
            <Link className="navbar-item" to="/jobs">
              Jobs
            </Link>
          </li>

          <li className="navbar-list">
            <a className="navbar-item">Companies</a>
          </li>

          <li className="navbar-list">
            <a className="navbar-item">Favourites</a>
          </li>
        </div>
        <div className="navbar-headers2">
          <li className="navbar-list">
            <a className="navbar-item">Login</a>
          </li>

          <li className="navbar-list">
            <a className="navbar-item">Sign Up</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
