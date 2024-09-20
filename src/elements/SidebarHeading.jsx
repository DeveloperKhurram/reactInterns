import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SidebarHeading = ({ heading }) => {
  return (
    <div className="skill-header ">
      <h2>{heading}</h2>
      <FontAwesomeIcon icon={faCaretDown} className="faCaretDown" />
    </div>
  );
};

export default SidebarHeading;
