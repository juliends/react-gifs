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
        <div className="main-scene">
          <SearchBar className="form-control" handleChange={this.searchGif}/>
          <div className="main-frame">
            <Gif className="gif" giphyId='xT9IgDEI1iZyb2wqo8' />
          </div>
        </div>
        <div className="list-container">
          <div className="gif-list">
            <GifList className="list-container" gifIds={this.state.gifIds} />  
          </div>
        </div>  
      </div>
    )   
  }
} 

export default App;
