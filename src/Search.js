// Search.js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends Component {
  render() {
    const {bookSearch, onSearch, onResetSearch, books, /*myBooks,*/ onMove,} = this.props
    console.log('bookSearch is ' + books)
    /*console.log('myBooks is ' + myBooks)*/
    return (
      <div className="search-books">
        <SearchBar onSearch={onSearch} onResetSearch={onResetSearch}/>
        <SearchResults bookSearch={bookSearch} myBooks={bookSearch} onMove={onMove}/>
      </div>
    );
  }
}

class SearchBar extends Component {
  state = {
    value: '',
  }
  manageChange = event => {
    const v = event.target.value
    this.setState({ value: v }, () => {
      this.props.onSearch(v)
    })
  }
  render() {
    const {onResetSearch} = this.props
    return(
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={onResetSearch}>Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"
            value={this.state.value}
            onChange={this.manageChange}
            autoFocus />
        </div>
      </div>
    )
  }
}

class SearchResults extends Component {
  render() {
    const {bookSearch, myBooks, onMove} = this.props;
    console.log('bookSearch is ' + bookSearch)
    const updatedBooks = bookSearch.map(book => {
      myBooks.map(b => {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
        return b;
      });
      return book;
    });
    return(
      <div className="search-books-results">
        <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book key={book.id} book={book} shelf={book.shelf ? book.shelf : "none"} onMove={onMove}/>
        ))}
        </ol>
      </div>
    )
  }
}

export default Search
