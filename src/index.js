import React from 'react';
import ReactDOM from 'react-dom';

// 'hey, use the React library and name it React'
// 'use the ReactDOM library to manipulate the DOM'

import SearchBar from './components/search_bar';

// 'use Searchbar from ./ this file in components...'

const API_KEY = 'AIzaSyAVzzrm2SeuDkFpuLGidiRNiRktltdUZYw';

// get the api from google
// npm install --save youtube-api-search
// this package will help us with the youtube api

// Create a new component that will make some HTML


const App = function () {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// plain functional component

// const App = () => {
//   return <div>Hi!</div>;
// };
// fat arrow version

// <div>Hi!</div> is JSX

// Take the generated HTML and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));

// <App /> is same as <App><App/> which makes an instance of const App
// second arguement is the target or where to apply the App
