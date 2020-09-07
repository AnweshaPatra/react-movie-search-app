import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovies.js";

ReactDOM.render(
  <div>
    <header>Made with ❤️ <a href="https://www.linkedin.com/in/anwesha-patra-30738715b/">Anwesha Patra</a></header>
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovies/>
    </div>
  </div>,
      document.getElementById('root')
);