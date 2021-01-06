import React from 'react';
import './App.css';
import BusinessList from '../businessList/businesslist';
import SearchBar from '../searchBar/searchbar';

function App() {
    return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar />
          <BusinessList /> 
        </div>
    );
}

export default App;
