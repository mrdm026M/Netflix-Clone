import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="home-footer">
      <div className="footer__section">
        <div className="top-div__section">
          <p>Questions? Call 000-800-040-1843</p>
        </div>
        <div className="middle-div__section">
          <div className="box box-1">
            <ul>
              <li>
                <NavLink to="/">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/">Investor Relation</NavLink>
              </li>
              <li>
                <NavLink to="/">Privacy</NavLink>
              </li>
              <li>
                <NavLink to="/">Speed Test</NavLink>
              </li>
            </ul>
          </div>
          <div className="box box-2">
            <ul>
              <li>
                <NavLink to="/">Help Center</NavLink>
              </li>
              <li>
                <NavLink to="/">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/">Cookies Preferences</NavLink>
              </li>
              <li>
                <NavLink to="/">Legal Notice</NavLink>
              </li>
            </ul>
          </div>
          <div className="box box-3">
            <ul>
              <li>
                <NavLink to="/">Account</NavLink>
              </li>
              <li>
                <NavLink to="/">Ways to watch</NavLink>
              </li>
              <li>
                <NavLink to="/">Corporate Information</NavLink>
              </li>
              <li>
                <NavLink to="/">Netflix Originals</NavLink>
              </li>
            </ul>
          </div>
          <div className="box box-4">
            <ul>
              <li>
                <NavLink to="/">Media Center</NavLink>
              </li>
              <li>
                <NavLink to="/">Terms of Use</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-div__section">
          <p>Netflix India</p>
        </div>
      </div>
    </div>
  );
};
