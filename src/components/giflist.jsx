// TODO: import the right dependencies
import React from 'react';
import Gif from './gif'

const GifList = (props) => {
  return (
    <div>
      {
        props.gifIds.map((element) => <Gif giphyId={element} />)
      }
    </div>
  )
} 

export default GifList;