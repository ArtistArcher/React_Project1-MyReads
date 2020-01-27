// BookShelf.js
import React, { Component } from 'react'
import Book from './Book'

// Define Book Shelf Component
class BookShelf extends Component {
  render() {
    // Define Component Variables & Functions
    const {shelf, books, onMove} = this.props
    // Function: Find Books On This Shelf
    const booksOnThisShelf = books.filter(book => book.shelf === shelf.key)
    /*console.log("BookShelf: " + shelf.name)*/
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {booksOnThisShelf.map(book => (
            <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove}/>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}


export default BookShelf
