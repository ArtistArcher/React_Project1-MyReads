// Book.js
import React, { Component } from 'react'
// import Components
import ShelfChanger from './ShelfChanger'
import noCover from './images/blank.png'

// Define Book Component
class Book extends Component {
  render() {
    // Define Component Variables & Functions
    const {book, onMove, shelf} = this.props
    //console.log("Book:" + book.title + " on " + shelf)
    
    // Create defaults for book cover, title & authors
    const bookImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover
    const title = book.title ? book.title : 'No Title'
    const authors = book.authors ? book.authors.join(', ') : 'Author Unknown'
    //console.log(book.shelf)
    
    return (
      <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, 
                    backgroundImage:`url(${bookImg})`,
                  }}>
                  </div>
                  {/*Call ShelfChanger Component*/}
                  <ShelfChanger book={book} shelf={shelf} onMove={onMove}/>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
              </div>
            </li>
    )
  }
}

export default Book
