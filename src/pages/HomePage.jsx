import React from "react";
import { Header, Main, Sidebar } from "../components/index";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-md-3 ">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
