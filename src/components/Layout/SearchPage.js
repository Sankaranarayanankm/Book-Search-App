import React, { useState } from "react";
import image from "../../assests/book-image-1.png";
import SearchIcon from "@mui/icons-material/Search";
import BookList from "./BookList";
const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);
  const changeHandler = (event) => {
    setSearch(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    async function getBooks() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${search}`
        );
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error.message || "Failed to get data");
        }
        const data = await response.json();
        // console.log(data.items);
        setBookList(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  };
  console.log(bookList);
  return (
    <div className="search-page">
      <img className="search-page-image" src={image} alt="image" />
      <form>
        <input type="search" onChange={changeHandler} value={search} />
        <button onClick={submitHandler}>
          <SearchIcon />
        </button>
      </form>
      <BookList books={bookList} />
    </div>
  );
};

export default SearchPage;
