import React , { Component } from "react";
import Book from "./Book";


const Bookshelf = (props) => {
  const currentBooks = props.books.map((book) =>
    <Book bookImg = { book.imageLinks.thumbnail }
          bookTitle = { book.title}
          key = { book.id }
            />
  )

    return(
       <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {currentBooks}
          </ol>
        </div>
      </div>
    )
}

export default Bookshelf;