import React from 'react';

const Gif = (props) => {

  return (
    <div className="gif">
      <img src={`https://media.giphy.com/media/${props.giphyId}/giphy.gif`} alt=""
        onClick={() => props.onListItemClick(props.giphyId)}></img>
    </div>
  )
} 

export default Gif;