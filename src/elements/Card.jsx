import React from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

const Card = ({ name, image, location, skills, position }) => {
  return (
    <>
    <article className="card-item">
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
    <article className="card-item">

     
     
        <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
          <div className="card-picture">
            <img src={image} alt={name} />
          </div>
          <span className="online" />
        </div>
        <div className="details">
          <h5 className="title mb-1">Robert Fox</h5>
          <p className="mb-0">Nursing Assistant</p>
          <div className="review">
            <p>
              <i className="fas fa-star fz10 review-color pr10" />
              <span className="dark-color fw500">4.9</span>(595 reviews)
            </p>
          </div>
          <div className="skill-tags d-flex align-items-center justify-content-center mb5">
            <span className="tag">Figma</span>
            <span className="tag mx10">Sketch</span>
            <span className="tag">HTML5</span>
          </div>
          <hr className="opacity-100 mt20 mb15" />
          <div className="fl-meta d-flex align-items-center justify-content-between">
            <a className="meta fw500 text-start">
              Location
              <br />
              <span className="fz14 fw400">London</span>
            </a>
            <a className="meta fw500 text-start">
              Rate
              <br />
              <span className="fz14 fw400">$90 / hr</span>
            </a>
            <a className="meta fw500 text-start">
              Job Success
              <br />
              <span className="fz14 fw400">%98</span>
            </a>
          </div>
          <div className="d-grid mt15">
            <a className="ud-btn btn-light-thm" href="/freelancer-single/1">
              View Profile
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
     
    </article>
    </>
  );
};

export default Card;
