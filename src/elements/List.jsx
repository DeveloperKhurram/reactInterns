import React from "react";

const List = ({ children }) => {
  return (
    <ul className="flex flex-wrap justify-content-center gap-5 py-4">
      {children}
    </ul>
  );
};

export default List;
