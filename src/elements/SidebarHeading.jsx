import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SidebarHeading = ({ heading }) => {
  return (
    <div className="skill-header d-flex justify-content-between pb-3 text-2xl font-bold">
      <h2>{heading}</h2>
      <FontAwesomeIcon icon={faCaretDown} />
    </div>
  );
};

export default SidebarHeading;
