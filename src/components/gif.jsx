import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.giphyId !== nextProps.giphyId;
  }

  render() {
    return (
      <div className="gif">
        <img src={`https://media.giphy.com/media/${this.props.giphyId}/giphy.gif`} alt=""
          onClick={() => this.props.onListItemClick(this.props.giphyId)}></img>
      </div>
    );
  }
}

export default Gif;
