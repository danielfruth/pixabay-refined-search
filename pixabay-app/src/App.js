import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SearchHeader from './components/SearchHeader';
import Selected from './components/Selected';
import Gallery from './components/Gallery';

function App() {
  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState('');
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
    const url = `${searchOptions.api}?key=${searchOptions.key}&q=${searchString}`;

    fetch(url)
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

  return (
    <div className="App">
      <SearchHeader
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <Switch>
        <Route path="/" exact>
          <Gallery images={images} />
        </Route>
        <Route
          path="/selected/:id"
          render={routerProps => {
            return <Selected match={routerProps.match} images={images} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
