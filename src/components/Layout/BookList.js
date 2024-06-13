import React from "react";
import Book from "./Book";

const BookList = (props) => {
  const books = props.books.map((item) => <Book key={item.id} {...item} />);
  return (
    <div>
      <h1>Your Books </h1>
      <ul>{books}</ul>
    </div>
  );
};

export default BookList;
