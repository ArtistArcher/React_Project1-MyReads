// ShelfChanger.js
import React, { Component } from 'react'

// Define ShelfChanger Component
class ShelfChanger extends Component {
  // Setup States for ShelfChanger
  state = {
    value: this.props.shelf,
  }

  render() {
    // Define Component Variables
    const {book, onMove} = this.props

    // Setting Value to be changed in App.js
    const changeShelf = event => {
      this.setState({value: event.target.value})
      /*console.log("Change Shelf Value: " + event.target.value)*/
      onMove(book, event.target.value)
    }
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={changeShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
