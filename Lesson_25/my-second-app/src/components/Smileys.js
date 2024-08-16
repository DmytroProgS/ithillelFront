import React, { Component } from 'react';
import '../styles/Smileys.css';

import smiley1 from '../assets/images/smile-1.jpg';
import smiley2 from '../assets/images/smile-2.jpg';
import smiley3 from '../assets/images/smile-3.jpg';
import smiley4 from '../assets/images/smile-4.jpg';
import smiley5 from '../assets/images/smile-5.jpg';

const smileyImages = [smiley1, smiley2, smiley3, smiley4, smiley5];

class Smileys extends Component {
  render() {
    return (
      <div className="smiley-container">
        {smileyImages.map((image, index) => (
          <div key={index} >
            <img src={image} onClick={() => this.props.onVote(index)} alt={`smiley-${index}`} />
            <div>{this.props.votes[index]}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Smileys;
