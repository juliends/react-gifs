// TODO: import the right dependencies
import React, { Component } from 'react';
import Gif from './gif';
import GifList from './giflist';
import SearchBar from './searchBar';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gifIds: ['xT9IgDEI1iZyb2wqo8','xT9IgDEI1iZyb2wqo8']};
  }

  searchGif(term){
    const word = (term.target.value);
    giphy.search(word, function (err, res) {
      console.log(res);
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar handleChange={this.searchGif}/>
        <Gif giphyId='xT9IgDEI1iZyb2wqo8' />
        <GifList gifIds={this.state.gifIds} />  
      </div>
    )   
  }
} 

export default App;
