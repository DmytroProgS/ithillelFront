import React, { Component } from 'react';
import '../styles/Buttons.css';

class ClearResult extends Component {
  render() {
    return (
      <button className="button-style" onClick={this.props.clearVotes}>Clear Results</button>
    );
  }
}

export default ClearResult;
