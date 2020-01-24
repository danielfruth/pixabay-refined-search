import React from 'react';
import './App.css';
import Main from './components/Main';
import SearchHeader from './components/SearchHeader';
import Selected from './components/Selected';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SearchHeader />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/selected/:image" />
      </Switch>
    </div>
  );
}

export default App;
