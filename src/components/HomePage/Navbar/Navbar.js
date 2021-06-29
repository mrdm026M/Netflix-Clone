import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import {} from "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar__section">
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="netflix logo" />
        </div>
        <div className="nav-links">
          <ul className="nav-link">
            <li>
              <button className="nav__btn">
                <NavLink to="/">Sign In</NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
