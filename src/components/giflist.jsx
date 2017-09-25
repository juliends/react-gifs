// TODO: import the right dependencies
import React, { Component } from 'react';
import Gif from './gif'

class GifList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        {
          props.gifIds.map((element) => <Gif giphyId={element} onClick={this.props.handleClick} />)
        }
      </div>
    )  
  } 
} 

export default GifList;