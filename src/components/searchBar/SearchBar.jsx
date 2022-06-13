import React from "react";

// Styles
import { Edikan } from "./SearchBar.Styles";

const SearchBar = ({ search, label }) => {
  return (
    <>
      <Edikan>
        <label>Search {label}: </label>
        <input type="search" name="search" id="search" onChange={search} />
      </Edikan>
    </>
  );
};

export default SearchBar;
