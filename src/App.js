import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import Selected from './components/Selected';
import Gallery from './components/Gallery';

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
    const URL = `${searchOptions.api}?key=${searchOptions.key}&q=${searchString}`;
    const editorsChoiceURL = `${searchOptions.api}?key=${searchOptions.key}&q=${searchString}&editors_choice=true`;

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
          render={routerProps => {
            return <Selected images={images} match={routerProps.match} />;
          }}
        />
      </Switch>
    </>
  );
}

export default App;
