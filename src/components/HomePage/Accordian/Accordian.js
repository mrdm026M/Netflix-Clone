import React, { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import accData from "../../../assets/data/accordianData";
import "./Accordian.scss";

export const Accordian = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="home-accordian">
      <div className="header">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="accordian__section">
        {accData.map((data, index) => {
          return (
            <div className="accordian__block">
              <div
                className="question"
                onClick={() => toggle(index)}
                key={index}
              >
                <h1>{data.question}</h1>
                <span>
                  {clicked === index ? (
                    <HiOutlineChevronDown />
                  ) : (
                    <HiOutlineChevronUp />
                  )}
                </span>
              </div>
              {clicked === index ? (
                <div className="answer">
                  <p>{data.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="input__content">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <button>
            <NavLink to="/">Try For Free</NavLink>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};
