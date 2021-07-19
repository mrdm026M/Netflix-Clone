import React from "react";
import category from "../../../assets/data/categoryData";
import { Categories } from "../../StyledComponent/Categories/Categories";

export const CategorySection = () => {
  return (
    <div className="category__section__content">
      {category.map((categories) => {
        return <Categories img={categories.img} name={categories.name} />;
      })}
    </div>
  );
};
