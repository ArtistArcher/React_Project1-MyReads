// MissingPage.js
import React from 'react'
import { Link } from 'react-router-dom'

// Display missing page if user navigates to an invalid page
const MissingPage = () => (
  <div>
    <h1 className="missing-title">
      The books you are looking for are not available.
    </h1>
    <div className="home-link">
      <Link to="/">Return to your book shelves</Link>
    </div>
  </div>
)

export default MissingPage
