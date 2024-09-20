import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ name }) => {
  // const placeholderText = typeof name === 'string' ? name : '';

  return (
    <div className="search-box ">
      <input
        type="text"
        name={`${name}`}
        id={`${name}`}
        className=""
        placeholder={`Search Other ${name}...`}
      />
      <FontAwesomeIcon icon={faSearch} className="faSearch" />
    </div>
  );
};

export default SearchBox;
