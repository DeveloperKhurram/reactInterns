import React from "react";
import "./header.css";
import data from "../data/interns.json";
import * as image from "../images";
import { ListMarquee, CardMarquee } from "../elements/index.js";

const Header = () => {
  const filteredStudents = data.filter((intern) => intern.grade > 90);

  // const repeatedStudents = [...filteredStudents, ...filteredStudents];
  return (
    <div className="py-4 px-8 ">
      <h1 className="text-center">Recommended Interns</h1>

      <ListMarquee>
        <div className="marquee-container my-8  ">
          <div className="marquee">
            {filteredStudents.map((intern) => (
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
