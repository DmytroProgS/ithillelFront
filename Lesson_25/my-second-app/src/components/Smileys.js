// src/components/Smileys.js
import React, { Component } from 'react';
import '../styles/Smileys.css';
import smileyImages from '../components/SmileyImages'; 

class Smileys extends Component {
  render() {
    return (
      <div className="smiley-container">
        {this.props.smileys.map((smiley) => (
          <div key={smiley.id}>
            <img
              src={smileyImages[smiley.id - 1]}
              onClick={() => this.props.onVote(smiley.id)}
              alt={`smiley-${smiley.id}`}
            />
            <div>{smiley.votes}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Smileys;
