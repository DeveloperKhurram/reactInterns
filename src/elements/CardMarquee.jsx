import React from "react";

const CardMarquee = ({ name, image, position }) => {
  return (
    <article className="card-marquee flex flex-col space-x-3 py-6 align-items-center justify-content-center">
      <div className="card-image w-[90px] h-[90px] rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full  object-cover" />
      </div>
      <div className="card-body flex flex-col justify-content-center align-items-center">
        <h3 className="font-bold text-2xl">{name}</h3>
        <h4>{position}</h4>
      </div>
    </article>
  );
};

export default CardMarquee;
