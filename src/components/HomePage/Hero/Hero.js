import React from "react";
import { NavLink } from "react-router-dom";
import {} from "./Hero.scss";

export const Hero = () => {
  return (
    <div className="home-hero__section">
      <div className="hero__section__content">
        <div className="heading__content">
          <h1>Unlimited Movies, TV shows & more.</h1>
          <p>Watch Anywhere | Cancel Anytime</p>
        </div>
        <div className="input__content">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <button>
              <NavLink to="/category">Try For Free</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
