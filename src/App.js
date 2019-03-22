import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchBar from "./SearchBar";
import {BrowserRouter} from "react-router-dom";
import ListBookShelves from "./ListBookShelves";
import Bookshelf from "./Bookshelf";

/**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: false,
      currentlyReading:[],
      wantToRead:[],
      read:[]

    }
    this.updateShelf = this.updateShelf.bind(this);
  }


  fetchBooks() {
    BooksAPI.getAll()
    .then((books)=>{
       this.setState({
        currentlyReading : books.filter((book) => book.shelf === 'currentlyReading'),
        wantToRead : books.filter((book) => book.shelf === 'wantToRead'),
        read : books.filter((book) => book.shelf === 'read')
      })
    })
  }
  componentDidMount(){
    this.fetchBooks();
  }

  updateShelf(book, shelf) {
    console.log(shelf);
    BooksAPI.update(book, shelf)
    .then(this.fetchBooks())
  }

  render() {
      return (
      <BrowserRouter>
        <SearchBar/>
        <ListBookShelves >
         <Bookshelf
          updateShelf = {() => this.updateShelf}
          shelfName={ "Currently Reading" }
          books = { this.state.currentlyReading }/>
         <Bookshelf
          updateShelf = {this.updateShelf}
          shelfName={ "Want to Read" }
          books = { this.state.wantToRead }/>
         <Bookshelf
          updateShelf = {this.updateShelf}
          shelfName={ "Read" }
          books = { this.state.read }/>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </ListBookShelves>
      </BrowserRouter>
    )
  }
}

export default BooksApp;
