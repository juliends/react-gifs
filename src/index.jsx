// external modules
import React from 'react';
import ReactDOM from 'react-dom';

import Gif from './components/gif'

// internal modules
import '../assets/stylesheets/application.scss';

// A simple example of a functional component
// const Hello = props => <h1>Hello, {props.name}</h1>;

// render an instance of the component in the DOM
ReactDOM.render(<Gif giphyId='xT9IgDEI1iZyb2wqo8' />, document.querySelector('.container'));
