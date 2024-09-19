import React from "react";

const Header = () => {
  return (
    <div className="w-full h-auto py-4 px-8 text-red-50 text-3xl  bg-slate-700">
      <h1 className="text-center font-bold">Recommended Interns</h1>

      <div className="marquee my-8  px-3 ">
        <div className="marquee-content">Your scrolling text goes here!</div>
      </div>
    </div>
  );
};

export default Header;
