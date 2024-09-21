import React from "react";
import { Header, Main, Sidebar } from "../components/index";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 large-sidebar">
            <Sidebar />
          </div>
          <div className="col-lg-8 main-bar col-md-12">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
