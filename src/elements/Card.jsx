import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Card = ({ name, image, location, skills, position }) => {
  return (
    <article className="card flex  align-items-center h-full flex-row py-2 pl-2 mx-[-12px]">
      <div className="card-image w-[90px] h-[90px] rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full  object-cover" />
      </div>
      <div className="card-body flex flex-col gap-2">
        <h3 className="font-bold text-2xl">{name}</h3>
        <h4 className="font-bold">{position}</h4>
        <p className="text-gray-400 italic text-sm">{`${location.city} - ${location.state} - ${location.country}`}</p>
        <p className="font-light text-sm">{skills.join(" | ")}</p>
        <ProgressBar now={60} />
      </div>
    </article>
  );
};

export default Card;
