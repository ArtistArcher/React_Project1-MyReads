// Search.js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Components
import Book from './Book'

// Define Search Component
class Search extends Component {
  // Setup States for Search Component
  state = {
    value: '',
  }
  // Set Default Shelf to None
  curShelf(book) {
    console.log(book.title + ' shelf is ' + book.shelf)
    if(book.shelf === 'currentlyReading' || book.shelf === 'wantToRead' || book.shelf === 'read') {
      return book.shelf
    }
    else {return 'none'}
  }
 
  
  render() {
    // Define Component Variables
    const {onSearch, bookSearch, onMove, onClear, myBooks} = this.props


  const updatedBooks = bookSearch.map(book => {
    myBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
        console.log('test')
      }
      else {/*book.shelf = 'none'*/}
      return b;
    });
    return book;
  });
    
    // Function: Manage Change of Input Field
    const manageChange = event => {
      const v = event.target.value
      this.setState({value: v}, () => {
        onSearch(v)
      })
    }
/*
    const shelf = 'read'
    const whatShelf = myBooks.filter(book => book.shelf === book.shelf ? book.shelf : 'none')
    //console.log("BookShelf: " + shelf.name)
    let myShelf = 'none'
    const checkShelf =  {
      if() {
      }
    }
*/
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onClear}>Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={this.state.value}
              onChange={manageChange}
            autoFocus />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {updatedBooks.map(book =>
              //book.shelf
              <Book key={book.id} book={book} shelf={book.shelf ? book.shelf : 'none'} onMove={onMove}/>
             )}
          </ol>
        </div>
      </div>
    )
  }
}


export default Search
