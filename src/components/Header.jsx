import React from "react";
import "./header.css";
import data from "../data/interns.json";
import * as image from "../images";
import { ListMarquee, CardMarquee } from "../elements/index.js";

const Header = () => {
  const filteredStudents = data.filter((intern) => intern.grade > 90);

  const repeatedStudents = [...filteredStudents, ...filteredStudents];
  return (
    <div className="pb-2 px-8 ">
      <ListMarquee>
        <div className="marquee-container my-8  ">
          <img className="img-left" src="src/images/left-top.png" alt="image" />
          <img className="img-right" src="src/images/right-bottom.png" alt="image" />
          <h2 className="text-center mb-5">Recommended Interns</h2>
          <div className="marquee">
            {repeatedStudents.map((intern) => (
              <div className="marquee-item" key={intern.id}>
                <CardMarquee image={image[intern.picture]} {...intern} />
              </div>
            ))}
          </div>
        </div>
      </ListMarquee>
    </div>
  );
};

export default Header;
