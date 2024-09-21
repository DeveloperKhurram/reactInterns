import React from "react";
import { List, Card, PaginationList } from "../elements/index.js";
import { SmallSideBar } from "./index.js";
import data from "../data/interns.json";
import * as image from "../images";

const Main = () => {
  return (
    <div className="w-100 d-flex flex-column">
      <div className="smallSideBar align-self-center mb-4">
        <SmallSideBar />
      </div>
      <List>
        {data.map((intern) => (
          <div className="col-md-6 col-lg-6 col-xl-4" key={intern.id}>
            <Card image={image[intern.picture]} {...intern} />
          </div>
        ))}
      </List>

      <PaginationList />
    </div>
  );
};

export default Main;
