// TODO: import the right dependencies
import React from 'react';

const Gif = (props) => {
  return (
    <img src={`https://media.giphy.com/media/${props.giphyId}/giphy.gif`} alt="" className='gif'></img>
  )
} 

export default Gif;