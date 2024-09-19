import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Card = ({ name, image, location, skills, position }) => {
  return (
    <article className="card flex space-x-3 p-6 card flex-row  align-items-center border-gray-400 border-0 w-[320px]">
      <div className="card-image w-[120px] h-[120px] rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full  object-cover" />
      </div>
      <div className="card-body">
        <h3 className="font-bold text-2xl">{name}</h3>
        <h4>{position}</h4>
        <p>{`${location.city} - ${location.state} - ${location.country}`}</p>
        <p>{skills.join(" | ")}</p>
        <ProgressBar now={60} />
      </div>
    </article>
  );
};

export default Card;
