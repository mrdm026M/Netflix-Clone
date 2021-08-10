import React from "react";
import "./CategorySection.scss";
import { NavLink } from "react-router-dom";

export const CategorySection = ({ name, img, margin, id }) => {
  const genreID = id;
  const data = {
    pathname: name,
    state: { id: genreID, sectionTitle: name },
  };

  return (
    <div className="category__section__content">
      <div
        className="single__category"
        style={{
          backgroundImage: `url(${img})`,
          marginTop: `${margin}`,
        }}
      >
        <NavLink to={data}>
          <span>{name}</span>
        </NavLink>
      </div>
    </div>
  );
};
