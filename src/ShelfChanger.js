// ShelfChanger.js
import React, { Component } from 'react'

// Define ShelfChanger Component
class ShelfChanger extends Component {
  state = {
    value: this.props.shelf,
  }
  // Setting Initial Value to be changed in App.js
  changeShelf = event => {
    this.setState({value: event.target.value})
    console.log("Change Shelf Value:" + event.target.value)
    this.props.onMove(this.props.book, event.target.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.changeShelf}>
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
