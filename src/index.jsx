// external modules
import React from 'react';
import ReactDOM from 'react-dom';

import Gif from './components/gif'
import SearchBar from './components/searchBar'

// internal modules
import '../assets/stylesheets/application.scss';

// render an instance of the component in the DOM
ReactDOM.render(<SearchBar />, document.querySelector('.container'));
ReactDOM.render(<Gif giphyId='xT9IgDEI1iZyb2wqo8' />, document.querySelector('.container'));
