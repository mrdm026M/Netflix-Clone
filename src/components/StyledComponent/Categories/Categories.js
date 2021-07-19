import React from "react";

export const Categories = ({ img = "", name = "category" }) => {
  return (
    <div className="single__category">
      <img src={img} alt="category" />
      <span>{name}</span>
    </div>
  );
};
