import React from "react";

const CardMarquee = ({ name, image, position }) => {
  return (
    <article className="card-marquee ">
      <div className="card-image ">
        <img src={image} alt={name} className="" />
      </div>
      <div className="card-body ">
        <h3 className="">{name}</h3>
        <h4>{position}</h4>
      </div>
    </article>
  );
};

export default CardMarquee;
