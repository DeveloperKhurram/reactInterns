import React from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

const Card = ({ name, image, location, skills, position }) => {
  return (
    <article className="card-item h-100">
      <div className="card-picture">
        <img src={image} alt={name} />
      </div>
      <div className="card-text h-100 w-100">
        <div className="borderBottom">
          <h3 className="">{name}</h3>
          <h4 className="">{position}</h4>
        </div>

        <p className="text-break">{`${location.city} - ${location.state}`}</p>
        <span className="d-block mb-2 ">{skills.join(" | ")}</span>
        <ProgressBar now={60} className="progressBar" />
      </div>
    </article>
  );
};

export default Card;
