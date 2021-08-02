import React from "react";
import apic from "../../../assets/images/2.jpg";
import logo from "../../../assets/images/logo.png";
import { CategorySection } from "../CategorySection/CategorySection";
import "./MainContent.scss";

export const MainContent = () => {
  return (
    <div className="main__content__section">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Netflix logo" />
        </div>
        <div className="account">
          <div className="account__pic">
            <img src={apic} alt="account pic" />
          </div>
          <span className="account__name">Dhruv</span>
        </div>
      </div>
      <div className="content">
        <CategorySection />
      </div>
    </div>
  );
};
