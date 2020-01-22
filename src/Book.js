import React from 'react';
import PropTypes from 'prop-types';
import ShelfSwitch from './ShelfSwitch';
import noCover from './images/blank.png';

const Book = props => {
  const { book, books, changeShelf } = props;

  // add default values if there is no cover image, title and author(s)
  const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCover;
  const title = book.title ? book.title : 'No title available';
  const author = book.authors ? book.authors : 'Author Unknown';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
          <ShelfSwitch book={book} books={books} changeShelf={changeShelf} />
        </div>
        <div className="book-title">{title}</div>
        {/* If authors exist render each on separate line*/
        book.authors ? 
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          )) :
            <div className="book-authors" key={author}>
              {author}
            </div>}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;
