import React from 'react';
import logo from '../logo.svg';
import './SearchHeader.css';

function SearchHeader() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      link to home
      <form>
        <input placeholder="Search" type="text" name="searchString" />
        <select>
          <option value="all">All</option>
          <option value="editorsChoice">Editor's Choice</option>
        </select>
      </form>
    </div>
  );
}

export default SearchHeader;
