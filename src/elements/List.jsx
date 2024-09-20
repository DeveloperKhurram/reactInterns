import React from "react";
import "./card.css";
const List = ({ children }) => {
  return (
    <ul className="card-list">
      {children}
    </ul>
  );
};

export default List;
