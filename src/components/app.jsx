// TODO: import the right dependencies
import React, { Component } from 'react';
import Gif from './gif'
import GifList from './giflist'
import SearchBar from './searchBar'

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <Gif giphyId='xT9IgDEI1iZyb2wqo8' />
        <GifList gifIds={['xT9IgDEI1iZyb2wqo8','xT9IgDEI1iZyb2wqo8']} />  
      </div>
    )   
  }
} 

export default App;
