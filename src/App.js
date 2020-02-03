import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import Selected from './components/Selected';
import Gallery from './components/Gallery';

// Hou comment: Nice job using hooks to add state to your functional components throughout your application!
function App() {
  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [filter, setFilter] = useState('all');
  const searchOptions = {
    key: process.env.REACT_APP_PIXABAY_KEY,
    perPage: 25,
    api: 'https://pixabay.com/api/'
  };

  useEffect(() => {
    getImages(searchString);
    // eslint-disable-next-line
  }, []);

  function getImages(searchString) {
    // Hou comment: instead of repeatedly accessing api and key in searchOptions, store those values in variables
    // const api = searchOptions.api
    // const key = searchOptions.key
    const URL = `${searchOptions.api}?key=${searchOptions.key}&q=${searchString}`;
    const editorsChoiceURL = `${searchOptions.api}?key=${searchOptions.key}&q=${searchString}&editors_choice=true`;

    // Hou comment: nice job with the ternary operator below!
    fetch(filter === 'all' ? URL : editorsChoiceURL)
      .then(response => response.json())
      .then(response => {
        setImages(response.hits);
        setSearchString('');
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }

  function handleDropDown(event) {
    setFilter(event.target.value);
  }

  return (
    // Hou comment: nice job using JSX fragment!
    <>
      <SearchHeader
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
        filter={filter}
        setFilter={handleDropDown}
      />
      <Switch>
        <Route path="/" exact>
          <Gallery images={images} />
        </Route>
        <Route
          path="/selected/:id"
          // Hou comment: How would you use implicit return on lines 70 - 72?
          render={routerProps => {
            return <Selected images={images} match={routerProps.match} />;
          }}
        />
      </Switch>
    </>
  );
}

export default App;
