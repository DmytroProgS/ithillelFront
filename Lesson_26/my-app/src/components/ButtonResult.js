import React, { Component } from 'react';
import '../styles/Buttons.css';

class ButtonResult extends Component {
  render() {
    return (
      <button className="button-style" onClick={this.props.showResults}>Show Results</button>
    );
  }
}

export default ButtonResult;
