import React, { useState } from "react";
import image from "../../assests/book-image-1.png";
import SearchIcon from "@mui/icons-material/Search";
const SearchPage = () => {
  const [search, setSearch] = useState("");
  const changeHandler = (event) => setSearch(event.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(search);
  };
  return (
    <div className="search-page">
      <img className="search-page-image" src={image} alt="image" />
      <form onSubmit={submitHandler}>
        <input type="search" onChange={changeHandler} value={search} />
        <div onClick={submitHandler}>
          <SearchIcon />
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
