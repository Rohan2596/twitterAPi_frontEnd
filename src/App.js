import React from 'react';
import './App.css';
import SearchComponent from './components/search';
import TweetComponent from './components/tweet';

function App() {
  return (
    <div className="App">
     <span className="main_header">Twitter Search  </span>
     <SearchComponent/>
     <span className="tweetHeader">Tweets</span>
     <TweetComponent/>
    </div>
  );
}

export default App;
