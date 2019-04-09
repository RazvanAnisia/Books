# MY READS 

**MY READS** is a React.js app that can help you organise your favourite books in three different categories.
It also has a Book API that you can use to add  Books to your shelves.


# LICENSE

Released under the MIT Licence

## Installation

* install all project dependencies with `npm install`
* start the development server with `npm start`


## The API 

The API is powered by a backend sever.
src/BooksAPI.js contains all the methods the app uses to interact with the API

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

## Structure
The app has 2 pages, the **homepage** which displays the current Books in your bookshelves .
And the **search** page , which displays the books provided from the API based on the search input.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
If you want to contribute, feel free to pull requests,
you can get in touch with the maintainer at anisiarazvan@gmail.com
