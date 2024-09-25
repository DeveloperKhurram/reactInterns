import React from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

const Card = ({ name, image, location, skills, position }) => {
  const currentProgress = 60;
  return (
    <>
      <article className="card-item">
        <div className="card-picture">
          <img src={image} alt={name} />
        </div>
        <div className="card-text ">
          <div className="borderBottom">
            <h3 className="">{name}</h3>
            <h4 className="">{position}</h4>

            <ul className="skills">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <p className="text-break">{`${location.city} - ${location.state}`}</p>
          {/* <span className="d-block mb-2 ">{skills.join(" | ")}</span> */}
          {/* <span className="d-block mb-2 ">{skills}</span> */}

          <ProgressBar
            now={currentProgress}
            label={`${currentProgress}%`}
            className="progressBar"
            animated
            min={0}
            max={100}
          />
        </div>
      </article>
    </>
  );
};

export default Card;
