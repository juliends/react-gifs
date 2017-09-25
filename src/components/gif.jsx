// TODO: import the right dependencies
import React from 'react';

const Gif = (props) => {
  return (
    <div className="">
      <img src={`https://media.giphy.com/media/${props.giphyId}/giphy.gif`} alt=""></img>
    </div>
  )
} 

export default Gif;