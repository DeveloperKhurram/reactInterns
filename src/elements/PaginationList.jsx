import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const PaginationList = () => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item disabled">
          <NavLink className={`nav-link`}>
            <FontAwesomeIcon icon={faChevronLeft} className="" />
          </NavLink>
        </li>

        <li className="nav-item ">
          <NavLink className={`nav-link`}>1</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className={`nav-link`}>2</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link`}>3</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link`}>4</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link`}>5</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link`}>...</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link`}>20</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={`nav-link`}>
            <FontAwesomeIcon icon={faChevronRight} className="" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default PaginationList;
