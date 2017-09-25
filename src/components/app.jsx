// TODO: import the right dependencies
import React, { Component } from 'react';
import Gif from './gif';
import GifList from './giflist';
import SearchBar from './searchBar';
var giphy = require('giphy-api')('fwyZq0pVmzjsbbqSNwuc51Y86Ved2ATP'); // API KEY

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gifIds: ['xT9IgDEI1iZyb2wqo8','xT9IgDEI1iZyb2wqo8']};
  }
  
  searchGif = (term) => {
    const word = (term.target.value);
    
    const results = giphy.search(word, (err, res) => {
      this.setState({gifIds: res.data.slice(0, 10).map(gif => gif.id)});
    });
  }

  handleClick = (e) => {
    console.log(event);
  }
  
  render() {
    return (
      <div>
        <SearchBar handleChange={this.searchGif}/>
        <Gif giphyId='xT9IgDEI1iZyb2wqo8' />
        <GifList gifIds={this.state.gifIds} handleClick={this.handleClick} />  
      </div>
    )   
  }
} 

export default App;
