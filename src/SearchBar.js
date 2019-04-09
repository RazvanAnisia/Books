import React , { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import Book from "./Book.js"

class SearchBar extends Component {
   state = {
       books:[],
       results:false,
       query:'',


   }

    onSearch(e) {
        const input = e.target.value;
        this.setState({query:input});

        if(this.state.query !== ''){
            BooksAPI.search(input)
                .then((books) => {
                    // console.log("SEARCHED",books)
                if(!books.error){
                    let shelvedBooks = this.props.currentBooks;

                    let shelvedCurrentlyReading = shelvedBooks.currentlyReading;
                    let shelvedWantToRead = shelvedBooks.wantToRead;
                    let shelvedRead = shelvedBooks.read;

                    //Get books that are common for both arrays
                    let searchedTitles = books.map( searched => searched.title );

                    let currentTitles = shelvedCurrentlyReading.map( book => book.title );
                    let readTitles = shelvedRead.map( book => book.title );
                    let wantToReadTitles = shelvedWantToRead.map( book => book.title );

                    let commonCurrTitles = searchedTitles.filter(r => currentTitles.includes(r));
                    let commonReadTitles = searchedTitles.filter(r => readTitles.includes(r));
                    let commonWantToReadTitles = searchedTitles.filter(r => wantToReadTitles.includes(r));

                    //add the correct shelf property to each one
                    books.forEach((book) => {
                        if(commonCurrTitles.includes(book.title)){
                            book["shelf"] = "currentlyReading";
                        }else if(commonReadTitles.includes(book.title)){
                            book["shelf"] = "read";
                        }else if(commonWantToReadTitles.includes(book.title)) {
                            book["shelf"] = "wantToRead";
                        }else {
                            book["shelf"] = "none";
                        }
                    })

                    this.setState({
                        books:books,
                        results:true,
                    })
                }else{
                   this.setState({results:false})
                }

                })
            .catch((err)=>console.log(err))
            e.preventDefault();
        }else {

        }

    }

    render(){
     let searchedBooks = null;


     if(this.state.results && this.state.books.length > 0 && this.state.query !==''){

        searchedBooks = this.state.books.map((book) =>
        <Book bookImg = { book.imageLinks  ? book.imageLinks.thumbnail : null }
              bookTitle = { book.title ? book.title : null }
              bookAuthors = { book.authors ? book.authors : null }
              key = { book.id }
              bookObj = { book }
              updateShelf = {this.props.updateShelf}
        />
      )
    }else if(!this.state.results){
      searchedBooks = null;
    }
      return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search" >Close</Link>
                <div className="search-books-input-wrapper">
                   <form  onChange ={(e) =>this.onSearch(e)}>
                      <input type="text" placeholder="Search by title or author"/>
                   </form>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {searchedBooks}
                </ol>

            </div>
        </div>
        )
    }
}

export default SearchBar;
