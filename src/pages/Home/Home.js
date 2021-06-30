import React from "react";
import sec from "../../assets/data/extraSectionData.js";
import bgImage from "../../assets/images/bg-image.jpg";
import { ExtraSections } from "../../components/HomePage/ExtraSections/ExtraSections";
import { Hero } from "../../components/HomePage/Hero/Hero";
import { Navbar } from "../../components/HomePage/Navbar/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home__section">
      <header
        className="page-header"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="page-header__content">
          <Navbar />
          <Hero />
        </div>
      </header>
      <main>
        {sec.map((data, index) => {
          return (
            <ExtraSections
              key={index}
              heading={data.heading}
              para={data.para}
              order_first={data.order_first}
              order_second={data.order_second}
              image={data.image}
              imageAlt={data.imageAlt}
            />
          );
        })}

        {/* <ExtraSections />
        <ExtraSections />
        <ExtraSections /> */}
      </main>
    </div>
  );
};
