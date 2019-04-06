import React  from "react";
import BookControl from "./BookControl";

const Book = (props) => {
  const bookImg = "url(" + props.bookImg + ")";
  const bookAuthors = props.bookAuthors;
  let bookAuthorsSpaced;
  //Check if the book has an author
  if(bookAuthors){
   bookAuthorsSpaced = bookAuthors.map((author) =><span key={author}>{author}<br/> </span> )
  }

    return(
        <li >
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:bookImg }}></div>
                  <div className="book-shelf-changer">
                    <BookControl
                      shelfName = { props.shelfName }
                      bookObj = { props.bookObj }
                      updateShelf={ props.updateShelf }/>
                  </div>
                </div>
                <div className="book-title">{props.bookTitle}</div>
                <div className="book-authors">{ bookAuthorsSpaced}</div>
              </div>
        </li>
    )
}

export default Book;