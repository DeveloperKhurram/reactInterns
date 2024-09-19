import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ name }) => {
  // const placeholderText = typeof name === 'string' ? name : '';

  return (
    <div className="search-box  d-flex gap-2 border p-3 border-gray-500 rounded-md align-items-center bg-white mb-3">
      <input
        type="text"
        name={`${name}`}
        id={`${name}`}
        className="flex-1 bg-transparent outline-none"
        placeholder={`Search Other ${name}...`}
      />
      <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
    </div>
  );
};

export default SearchBox;
