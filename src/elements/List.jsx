import React from "react";

const List = ({ children }) => {
  return (
    <ul className="flex flex-wrap gap-y-3 py-4">
      {children}
    </ul>
  );
};

export default List;
