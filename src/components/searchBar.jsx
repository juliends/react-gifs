import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <input className="form-control" onChange={this.props.handleChange}></input>
    );
  }
}

export default SearchBar;