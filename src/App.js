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
  state = {
    books: [],
    bookSearch: [],
  }

  // Lifecycle Event After Component Mounts
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(prevState => ({
        ...prevState,
        books
      }))
    })
  }

  // Function: Switch Shelf
  switchShelf = (book, shelf) => {
    if(book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        this.setState(prevState => ({
          books: prevState.books.filter(b => b.id !== book.id).concat(book)
        }))
      })
    }
  }

  // Function: Search Books

  searchBooks = query => {
    if(query.length <= 0) {
      this.setState({bookSearch: []})
    }
    else {
      BooksAPI.search(query).then(books =>{
        if(!books || books.error) {
          this.setState({bookSearch: []})
        }
        else {
          this.setState({bookSearch: books})
        }
      })
    }
  }
/*
  searchBooks = query => {
    if(query.length <= 0) {
      this.setState({bookSearch: []})
    }
    else {
      BooksAPI.search(query).then(books =>{
        if(!books || books.error) {
          this.setState({bookSearch: []})
        }
        else {
          this.setState({bookSearch: books})
        }
        if (this.state.books.id === books.id) {
                    books.shelf = this.state.books.shelf
        }
        return books.shelf
      })
    }
  }
*/
  // Function: Clear Search Results
  clearSearch = () => {
    this.setState({bookSearch: []})
  }


  render() {
    const {books, bookSearch} = this.state
    return (
     <div className="app">
      {/* Show page based on URL*/}
       <Route exact path="/" render={() => (
         <ListBooks books={books} onMove={this.switchShelf}/>
          )}/>
       <Route exact path="/search" render={() => (
         <Search 
           onSearch={this.searchBooks}
           myBooks={books}
           bookSearch={bookSearch}
           onMove={this.switchShelf}
           onClear={this.clearSearch}
         />
       )}/>
     </div>
    )
  }
}


export default BooksApp
