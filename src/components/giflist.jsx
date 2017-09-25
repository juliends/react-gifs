// TODO: import the right dependencies
import React from 'react';
import Gif from './gif'

const GifList = (props) => {
 
  return (
    <div>
      {
        props.gifIds.map((id) => <Gif giphyId={id} />)
      }
    </div>
  )
} 

export default GifList;