import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchBar from "./SearchBar";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import ListBookShelves from "./ListBookShelves";
import Bookshelf from "./Bookshelf";
import OpenSearch from "./OpenSearch.js";


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
      currentlyReading:[],
      wantToRead:[],
      read:[],
      searchedBooks:[]
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
      // console.log(this.state)
    })
    .catch((er) => console.log(er))
    
  }
  componentDidMount(){
    this.fetchBooks();
  }

  updateShelf(book, shelf) {
     BooksAPI.update(book, shelf)
    .then(this.fetchBooks())
    .catch((err) => console.log(err))
    
  }
  
  render() {
      return (
      <BrowserRouter>
       <Route exact path = "/"
         render ={() => (<ListBookShelves >
          <Bookshelf
           updateShelf = {this.updateShelf}
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
             <OpenSearch/>
         </ListBookShelves>)}>
      </Route> 
      <Route path = "/search"
        render ={() => <SearchBar 
        currentBooks = { this.state }
        updateShelf = { this.updateShelf }
        />}>
      </Route>
        
      </BrowserRouter>
    )
  }
}

export default BooksApp;
