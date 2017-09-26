import React from 'react';
import Gif from './gif'

const GifList = (props) => { 
  return (
    <div>
      {
        props.gifIds.map(id => <Gif giphyId={id} onListItemClick={props.selectedGif} />)
      }
    </div>
  )
} 

export default GifList;