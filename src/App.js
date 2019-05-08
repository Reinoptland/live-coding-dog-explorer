import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import DogsListContainer from './DogsListContainer'
import DogBreedImages from './DogBreedImages'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImages} />

      </header>
    </div>
  );
}

export default App;
