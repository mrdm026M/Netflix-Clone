import React from "react";
import category from "../../../assets/data/categoryData";
import "./CategorySection.scss";

export const CategorySection = () => {
  return (
    <div className="category__section__content">
      {category.map((categories) => {
        return (
          <div
            className="single__category"
            style={{
              backgroundImage: `url(${categories.img})`,
              marginTop: `${categories.margin}`,
            }}
          >
            <span>{categories.name}</span>
          </div>
        );
      })}
    </div>
  );
};
