import React from 'react';
import logo from '../logo.svg';
import './SearchHeader.css';
import { Link } from 'react-router-dom';

function SearchHeader(props) {
  // Hou comment: nice job destructuring your props!
  const { handleChange, handleSubmit, searchString, filter, setFilter } = props;
  return (
    // Hou comment: can we use a more semantic HTML tag for the header?
    <div className="header">
      <a href="https://pixabay.com/">
        <div className="title-link">
          {/* Hou comment: consider adding some alt text to describe your logo */}
          <img className="logo" src={logo} alt="" />
          <h1 className="title-extension">refined search</h1>
        </div>
      </a>

      <Link className="home-link" to="/">
        Home
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <select value={filter} onChange={setFilter}>
          <option value="all">All</option>
          <option value="editorsChoice">Editor's Choice</option>
        </select>
      </form>
    </div>
  );
}

export default SearchHeader;
