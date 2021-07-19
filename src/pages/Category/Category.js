import React from "react";
import { MainContent } from "../../components/CategoryPage/MainContent/MainContent";
import { Sidebar } from "../../components/StyledComponent/Sidebar/Sidebar";
import "./Category.scss";

export const Category = () => {
  return (
    <div className="category__page">
      <nav className="navbar">
        <Sidebar />
      </nav>
      <main className="main__content">
        <MainContent />
      </main>
    </div>
  );
};
