// App.js
// import React from 'react'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
// import Components
import ListBooks from './ListBooks'
import Search from './Search'

// Define BooksApp
class BooksApp extends Component {
  // Define Book Shelves
  bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ]
  
  // Setup States for BooksApp
  state = {
    books: [],
    bookSearch: [],
    myBooks: [],
    searchBooks: [],
  };

  // Check to see if Component Did Mount
  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({books: books})
    })
    //console.log("Did Mount");
  }

  // Function: Switch Shelf
  switchShelf = (book, shelf) => {
    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }))
    } else {
      book.shelf = shelf
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }))
    }
  }

  // Function: Search for Books
  searchFor = query => {
    if(query.length <= 0) {
      this.setState({bookSearch: []})
    }
    else {  
      BooksAPI.search(query).then(books => {
        if(books.error) {
          this.setState({bookSearch: []})
        }
        else {
          this.setState({bookSearch: books})
        }
      })
    }
  }

  // Function: Reset Search
  resetSearch = () => {
    this.setState({bookSearch: []})
  }

  render() {
    const { books, bookSearch } = this.state
    return (
     <div className="app">
      {/* Show page based on URL*/}
       <Route exact path="/" render={() => (
            <ListBooks bookshelves={this.bookshelves} books={books} onMove={this.switchShelf}/>
          )}/>
       <Route exact path="/search" render={() => <Search 
              bookSearch={bookSearch}
              myBooks={books}
              onSearch={this.searchFor}
              onMove={this.switchShelf}
              onResetSearch={this.resetSearch}/>}
       />
     </div>
    )
  }
}


export default BooksApp
