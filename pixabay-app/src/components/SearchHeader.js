import React from 'react';
import logo from '../logo.svg';
import './SearchHeader.css';
import { Link } from 'react-router-dom';

function SearchHeader(props) {
  const { handleChange, handleSubmit, searchString } = props;
  return (
    <div className="header">
      <a href="https://pixabay.com/">
        <div className="title-link">
          <img className="logo" src={logo} alt="" />
          <h1 className="title-extension">refined search</h1>
        </div>
      </a>

      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          required
          onChange={handleChange}
          value={searchString}
        />
        <select>
          <option value="all">All</option>
          <option value="editorsChoice">Editor's Choice</option>
        </select>
      </form>
    </div>
  );
}

export default SearchHeader;
