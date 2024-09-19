import React from "react";
import { List, Card, PaginationList } from "../elements/index.js";
import data from "../data/interns.json";
import * as image from "../images";

const Main = () => {
  return (
    <div className=" min-h-screen">
      <List>
        {data.map((intern) => (
          <Card key={intern.id} image={image[intern.picture]} {...intern} />
        ))}
      </List>

      <PaginationList />
    </div>
  );
};

export default Main;
