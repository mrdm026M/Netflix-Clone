import React from "react";
import "./ExtraSections.scss";

export const ExtraSections = ({
  heading = "Lorem",
  para = "Lorem",
  order_first = 1,
  order_second = 2,
  image = "Lorem",
  imageAlt = "Lorem",
}) => {
  return (
    <div className="extra__sections">
      <div className="main__content">
        <div
          className="content"
          style={{
            order: `${order_first}`,
          }}
        >
          <h1>{heading}</h1>
          <p>{para}</p>
        </div>
        <div
          className="extra-image"
          style={{
            order: `${order_second}`,
          }}
        >
          <img src={image} alt={imageAlt} />
        </div>
      </div>
      <hr />
    </div>
  );
};
