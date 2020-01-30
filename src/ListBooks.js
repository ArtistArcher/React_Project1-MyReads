// ListBooks.js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Components
import BookShelf from './BookShelf'

// Define ListBooks Component
class ListBooks extends Component {
  render() {
    // Define Component Variables
    const {books, onMove} = this.props
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div>
              <BookShelf key='curr' shelf='currentlyReading'  shelfName='Currently Reading' books={books} onMove={onMove}/>
              <BookShelf key='want' shelf='wantToRead'  shelfName='Want to Read' books={books} onMove={onMove}/>
              <BookShelf key='read' shelf='read'  shelfName='Read' books={books} onMove={onMove}/>
            </div>
            <div className="open-search">
              <Link to="search">
                <button onClick={Link}>Add a Book</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ListBooks
