import React from "react";

const Book = (props) => {
  const { volumeInfo, searchInfo } = props;
  console.log(props);
  const imageSrc = !!volumeInfo.imageLinks
    ? volumeInfo.imageLinks.thumbnail || volumeInfo.imageLinks.smallThumbnail
    : "";
  const briefDesc = !!searchInfo ? searchInfo.textSnippet : "";
  const authors = volumeInfo.authors.map((item) => item);

  return (
    <div>
      <img src={imageSrc} alt={props.volumeInfo.title} />
      <h3>{props.volumeInfo.title}</h3>
      <p>Authors: {authors}</p>
      <p>Published on: {volumeInfo.publishedDate}</p>
      {volumeInfo.pageCount > 0 && <p>TotalPages:{volumeInfo.pageCount}</p>}
      {volumeInfo.averageRating && (
        <p>Rating: {volumeInfo.averageRating}</p>
      )}
      {!!briefDesc && (
        <p>
          <em>{searchInfo.textSnippet}</em>
        </p>
      )}
      
    </div>
  );
};

export default Book;
