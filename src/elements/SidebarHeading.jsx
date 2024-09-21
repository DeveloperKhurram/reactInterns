import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SidebarHeading = ({ heading }) => {
  return (
    <div className="skill-header ">
      <h3>{heading}</h3>
      <FontAwesomeIcon icon={faCaretDown} className="faCaretDown" />
    </div>
  );
};

export default SidebarHeading;
