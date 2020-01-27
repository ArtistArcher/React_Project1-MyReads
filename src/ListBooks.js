// ListBooks.js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  render() {
    // Define Component Variables
    const {bookshelves, books, onMove} = this.props;
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div>
              {bookshelves.map((shelf) => (
                <BookShelf key={shelf.key} shelf={shelf} books={books} onMove={onMove}/>
              ))}
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

/*
class BookCase extends Component {
  render() {
    console.log("BookCase")
    const { bookshelves, books, onMove } = this.props;
    return(
      <div>
      {bookshelves.map((shelf) => (
          <BookShelf key={shelf.key} shelf={shelf} books={books} onMove={onMove}/>
        ))}
      </div>
    )
  }
}
*/

/*
const OpenSearchButton = () => {
  return (
    <div className="open-search">
      <Link to="search">
        <button onClick={Link}>Add a Book</button>
      </Link>
    </div>
  );
};
*/

export default ListBooks
