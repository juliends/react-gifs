import React from 'react';
import Gif from './gif'

const GifList = (props) => { 
  return (
    <div>
      {
        props.gifIds.map(id => <Gif giphyId={id} onClick={() => this.props.handleClick} />)
      }
    </div>
  )
} 

export default GifList;