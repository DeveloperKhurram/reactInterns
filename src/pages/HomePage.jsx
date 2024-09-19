import React from "react";
import { Header, Main, Sidebar } from "../components/index";

const HomePage = () => {
  return (
    <div className="">
      <Header />
        <div className="row py-4 px-12 g-2">
          <div className="col-md-4 ">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <Main />
          </div>
        </div>
      
    </div>
  );
};

export default HomePage;
