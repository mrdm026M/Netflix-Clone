import React from "react";
import bgImage from "../../assets/images/bg-image.jpg";
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
      {/* <main>

      </main>
      <footer>

      </footer>
      <h1>Home</h1> */}
    </div>
  );
};
